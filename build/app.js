"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              fetch("https://newsapi.org/v1/sources?apiKey=".concat(apiKey)).then(function (response) {
                return response.json();
              }).then(function (data) {
                return createSourceSelect(data);
              });
            } catch (err) {
              alert(err);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getNewsSources() {
    return _ref.apply(this, arguments);
  };
}();

getNewsSources();

var createSourceSelect = function createSourceSelect(data) {
  var list = document.getElementById("sourceSelect");
  data.sources.forEach(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name;
    var option = document.createElement("option");
    option.value = id;
    option.innerHTML = name;
    list.appendChild(option);
  });
};

var newsSourceChanged = function newsSourceChanged() {
  var select = document.getElementById("sourceSelect");
  renderNewsBySourceId(select.value);
};