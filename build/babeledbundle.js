"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    var newsRenderer = require("./newsRenderer.js");

    document.addEventListener("DOMContentLoaded", function () {
      var goButton = document.getElementById("loadNewsButton");
      goButton.addEventListener("click", function () {
        newsSourceChanged();
      });
    });

    var getNewsSources =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("https://newsapi.org/v1/sources?apiKey=".concat(newsRenderer.apiKey)).then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(response) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return response.json();

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }()).then(function (data) {
                  return createSourceSelect(data);
                }).catch(function (err) {
                  return alert(err);
                }).finally(function () {
                  return console.log("fetched");
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getNewsSources() {
        return _ref.apply(this, arguments);
      };
    }();

    getNewsSources();

    var createSourceSelect = function createSourceSelect(data) {
      var list = document.getElementById("sourceSelect");
      data.sources.forEach(function (source) {
        var option = document.createElement("option");
        var keyValues = Object.entries(source);
        option.value = keyValues.filter(function (keyValue) {
          return keyValue[0] == "id";
        })[0][1];
        option.innerHTML = keyValues.filter(function (keyValue) {
          return keyValue[0] == "name";
        })[0][1];
        list.appendChild(option);
      });
    };

    var newsSourceChanged = function newsSourceChanged() {
      var select = document.getElementById("sourceSelect");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = select.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var option = _step.value;

          if (option.value === select.value) {
            newsRenderer.renderNewsBySourceId(select.value);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };
  }, {
    "./newsRenderer.js": 2
  }],
  2: [function (require, module, exports) {
    var apiKey = '1f5c03e664be446b9ae05da3364ed2a6';

    var renderNewsBySourceId =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(sourceId) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch("https://newsapi.org/v1/articles?source=".concat(sourceId, "&apiKey=").concat(apiKey)).then(
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(response) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return response.json();

                          case 2:
                            return _context3.abrupt("return", _context3.sent);

                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x3) {
                    return _ref4.apply(this, arguments);
                  };
                }()).then(function (response) {
                  return renderArticles(response.articles);
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function renderNewsBySourceId(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    var renderArticles = function renderArticles(articles) {
      var posts = document.getElementById('posts');
      var postsDiv = document.createElement('div');
      postsDiv.innerHTML = '';
      articles.forEach(function (article) {
        postsDiv.appendChild(renderArticle(article));
      });
      posts.innerHTML = '';
      posts.appendChild(postsDiv);
    };

    var renderArticle = function renderArticle(article) {
      var post = document.createElement('section');
      post.className = 'post';
      var header = getHeader(article);
      var postImage = getImage(article);
      var title = getTitle(article);
      header.appendChild(title);
      post.appendChild(header);
      var description = getDescription(article);
      description.appendChild(postImage);
      post.appendChild(description);
      post.appendChild(document.createElement("br"));
      return post;
    };

    var getHeader = function getHeader(article) {
      var header = document.createElement('header');
      header.className = 'post-header';

      if (article.author) {
        var postMeta = document.createElement('p');
        postMeta.className = 'post-meta';
        postMeta.innerHTML = "".concat(article.author && !article.author.includes('http') ? "By ".concat(article.author) : '', " ").concat(article.publishedAt);
        header.appendChild(postMeta);
      }

      return header;
    };

    var getTitle = function getTitle(article) {
      var title = document.createElement('a');
      title.href = article.url;
      var titleText = document.createElement('p');
      titleText.className = 'post-title';
      titleText.innerHTML = article.title;
      title.appendChild(titleText);
      return title;
    };

    var getImage = function getImage(article) {
      var postImage = document.createElement('div');
      postImage.className = 'post-images';
      var img = document.createElement('img');
      img.className = 'pure-img-responsive';
      img.src = article.urlToImage;
      postImage.appendChild(img);
      return postImage;
    };

    var getDescription = function getDescription(article) {
      var descriptionText = document.createElement('p');
      descriptionText.className = 'post-description';
      descriptionText.innerHTML = article.description;
      return descriptionText;
    };

    module.exports = {
      apiKey: apiKey,
      renderNewsBySourceId: renderNewsBySourceId
    };
  }, {}]
}, {}, [1]);
