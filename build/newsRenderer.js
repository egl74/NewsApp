"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiKey = '1f5c03e664be446b9ae05da3364ed2a6';

var renderNewsBySourceId =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(sourceId) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://newsapi.org/v1/articles?source=".concat(sourceId, "&apiKey=").concat(apiKey)).then(function (response) {
              return response.json();
            }).then(function (response) {
              return renderArticles(response.articles);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function renderNewsBySourceId(_x) {
    return _ref.apply(this, arguments);
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