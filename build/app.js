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
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("https://newsapi.org/v1/sources?apiKey=".concat(apiKey)).then(
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
            });

          case 3:
            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            alert(_context2.t0);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 5]]);
  }));

  return function getNewsSources() {
    return _ref.apply(this, arguments);
  };
}();

getNewsSources();

var createSourceSelect = function createSourceSelect(data) {
  var list = document.getElementById("sourceSelect");
  data.sources.forEach(function (_ref3) {
    var id = _ref3.id,
        name = _ref3.name;
    var option = document.createElement("option");
    option.id = "sourceSelectOptions";
    option.value = id;
    option.innerHTML = name;
    list.appendChild(option);
  });
};

var newsSourceChanged = function newsSourceChanged() {
  var select = document.getElementById("sourceSelect");
  var selectOptions = document.getElementById("sourceSelect");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = selectOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var option = _step.value;

      if (option.value === select.value) {
        renderNewsBySourceId(select.value);
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