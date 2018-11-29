/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/newsRenderer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/newsRenderer.js":
/*!*****************************!*\
  !*** ./src/newsRenderer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar sharedConstants = __webpack_require__(/*! ./sharedConstants.js */ \"./src/sharedConstants.js\");\n\nvar renderNewsBySourceId =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(sourceId) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(\"https://newsapi.org/v1/articles?source=\".concat(sourceId, \"&apiKey=\").concat(sharedConstants.apiKey)).then(\n            /*#__PURE__*/\n            function () {\n              var _ref2 = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee(response) {\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return response.json();\n\n                      case 2:\n                        return _context.abrupt(\"return\", _context.sent);\n\n                      case 3:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, this);\n              }));\n\n              return function (_x2) {\n                return _ref2.apply(this, arguments);\n              };\n            }()).then(function (response) {\n              return renderArticles(response.articles);\n            });\n\n          case 2:\n            return _context2.abrupt(\"return\", _context2.sent);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function renderNewsBySourceId(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar renderArticles = function renderArticles(articles) {\n  var posts = document.getElementById('posts');\n  var postsDiv = document.createElement('div');\n  postsDiv.innerHTML = '';\n  articles.forEach(function (article) {\n    postsDiv.appendChild(renderArticle(article));\n  });\n  posts.innerHTML = '';\n  posts.appendChild(postsDiv);\n};\n\nvar renderArticle = function renderArticle(article) {\n  var post = document.createElement('section');\n  post.className = 'post';\n  var header = getHeader(article);\n  var postImage = getImage(article);\n  var title = getTitle(article);\n  header.appendChild(title);\n  post.appendChild(header);\n  var description = getDescription(article);\n  description.appendChild(postImage);\n  post.appendChild(description);\n  post.appendChild(document.createElement(\"br\"));\n  return post;\n};\n\nvar getHeader = function getHeader(article) {\n  var header = document.createElement('header');\n  header.className = 'post-header';\n\n  if (article.author) {\n    var postMeta = document.createElement('p');\n    postMeta.className = 'post-meta';\n    postMeta.innerHTML = \"\".concat(article.author && !article.author.includes('http') ? \"By \".concat(article.author) : '', \" \").concat(article.publishedAt);\n    header.appendChild(postMeta);\n  }\n\n  return header;\n};\n\nvar getTitle = function getTitle(article) {\n  var title = document.createElement('a');\n  title.href = article.url;\n  var titleText = document.createElement('p');\n  titleText.className = 'post-title';\n  titleText.innerHTML = article.title;\n  title.appendChild(titleText);\n  return title;\n};\n\nvar getImage = function getImage(article) {\n  var postImage = document.createElement('div');\n  postImage.className = 'post-images';\n  var img = document.createElement('img');\n  img.className = 'pure-img-responsive';\n  img.src = article.urlToImage;\n  postImage.appendChild(img);\n  return postImage;\n};\n\nvar getDescription = function getDescription(article) {\n  var descriptionText = document.createElement('p');\n  descriptionText.className = 'post-description';\n  descriptionText.innerHTML = article.description;\n  return descriptionText;\n};\n\nmodule.exports = {\n  renderNewsBySourceId: renderNewsBySourceId\n};\n\n//# sourceURL=webpack:///./src/newsRenderer.js?");

/***/ }),

/***/ "./src/sharedConstants.js":
/*!********************************!*\
  !*** ./src/sharedConstants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var apiKey = '1f5c03e664be446b9ae05da3364ed2a6';\nmodule.exports = {\n  apiKey: apiKey\n};\n\n//# sourceURL=webpack:///./src/sharedConstants.js?");

/***/ })

/******/ });