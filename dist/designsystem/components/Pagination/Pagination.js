"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Pagination = require("./Pagination.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Pagination = function Pagination(_ref) {
  var pageSize = _ref.pageSize,
      total = _ref.total,
      currentPage = _ref.currentPage,
      baseUrl = _ref.baseUrl,
      _onClick = _ref.onClick,
      style = _ref.style,
      seoCallback = _ref.seoCallback;
  if (total == 0) return null;

  if (!_onClick) {
    _onClick = function onClick() {};
  }

  var totalNumberOfPages = Math.ceil(total / pageSize);
  var links = Object.keys(_toConsumableArray(new Array(totalNumberOfPages))).map(function (val) {
    return parseInt(val) + 1;
  });
  var searchRadius = currentPage == totalNumberOfPages || currentPage == 1 ? 2 : 1;

  var createHref = function createHref(pageNumber) {
    var url = new URL(baseUrl, "http://f.a");
    url.searchParams.set("page", pageNumber);
    return url.pathname + url.search;
  }; //filter pages that are close to the current page


  var shouldBeDisplayed = function shouldBeDisplayed(page) {
    if (page == currentPage) return true;
    if (page > currentPage && currentPage + searchRadius >= page) return true;
    if (page < currentPage && currentPage - searchRadius <= page) return true;
    return false;
  };

  var filteredLink = links.filter(function (x) {
    return shouldBeDisplayed(x);
  });

  var firstLink = function firstLink() {
    if (filteredLink.some(function (x) {
      return x === 1;
    })) return null;
    var distanceEl = filteredLink.some(function (x) {
      return x === 2;
    }) ? null : (0, _core.jsx)("span", {
      css: _Pagination.distanceIndicatorStyle
    }, "...");
    return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)("a", {
      className: "first",
      href: createHref(1),
      onClick: function onClick(e) {
        return _onClick(e, 1);
      },
      css: [_Pagination.pageStyle]
    }, "1"), distanceEl);
  };

  var lastLink = function lastLink() {
    var max = Math.max.apply(Math, _toConsumableArray(links));
    if (filteredLink.some(function (x) {
      return x == max;
    })) return null;
    var distanceEl = filteredLink.some(function (x) {
      return x === max - 1;
    }) ? null : (0, _core.jsx)("span", {
      css: _Pagination.distanceIndicatorStyle
    }, "...");
    return (0, _core.jsx)(_react["default"].Fragment, null, distanceEl, (0, _core.jsx)("a", {
      className: "last",
      href: createHref(max),
      onClick: function onClick(e) {
        return _onClick(e, max);
      },
      css: _Pagination.pageStyle
    }, max));
  };

  var isFirstPage = currentPage == 1;
  var lastPage = Math.max.apply(Math, _toConsumableArray(links));
  var isLastPage = lastPage == currentPage;
  var prevPage = isFirstPage ? null : createHref(currentPage - 1);
  var nextPage = isLastPage ? null : createHref(currentPage + 1);
  var SeoCallbackResult = seoCallback ? seoCallback(prevPage, nextPage) : null;

  var getClass = function getClass(pageNumber) {
    if (lastPage === pageNumber) return "last";
    if (pageNumber === 1) return "first";
    return null;
  };

  return (0, _core.jsx)("nav", {
    "aria-label": "pagination",
    css: [_Pagination.paginationWrapperStyle, style]
  }, isFirstPage ? (0, _core.jsx)("span", {
    css: [_Pagination.prevPageStyle, _Pagination.prevPageStyleHidden]
  }, "F\xF6reg\xE5ende sida") : (0, _core.jsx)("a", {
    href: createHref(currentPage - 1),
    onClick: function onClick(e) {
      return _onClick(e, currentPage - 1);
    },
    css: _Pagination.prevPageStyle
  }, "F\xF6reg\xE5ende sida"), firstLink(), filteredLink.map(function (pageNumber) {
    var isCurrent = pageNumber == currentPage;
    return (0, _core.jsx)("a", {
      href: createHref(pageNumber),
      className: getClass(pageNumber),
      onClick: function onClick(e) {
        return _onClick(e, pageNumber);
      },
      "aria-current": isCurrent ? "page" : null,
      key: "pagination".concat(pageNumber),
      css: [_Pagination.pageStyle, isCurrent ? _Pagination.currentPageStyle : null]
    }, pageNumber);
  }), lastLink(), isLastPage ? (0, _core.jsx)("span", {
    css: [_Pagination.nextPageStyle, _Pagination.prevPageStyleHidden]
  }, "N\xE4sta sida") : (0, _core.jsx)("a", {
    href: createHref(currentPage + 1),
    onClick: function onClick(e) {
      return _onClick(e, currentPage + 1);
    },
    css: _Pagination.nextPageStyle
  }, "N\xE4sta sida"), SeoCallbackResult);
};

exports.Pagination = Pagination;

//# sourceMappingURL=Pagination.js.map