"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var css = _interopRequireWildcard(require("./ListItem.css"));

var _DateFormat = require("../DateFormat/DateFormat");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      headline = _ref.headline,
      preamble = _ref.preamble,
      bottomText = _ref.bottomText,
      type = _ref.type,
      reviewedDate = _ref.reviewedDate,
      href = _ref.href,
      headlineLevel = _ref.headlineLevel,
      headlineStyleLevel = _ref.headlineStyleLevel,
      style = _ref.style,
      invertedLinkStyle = _ref.invertedLinkStyle,
      onClick = _ref.onClick;
  return (0, _core.jsx)("a", {
    css: [css.wrapper, invertedLinkStyle && css.invertedLink, style],
    className: "noStyle",
    href: href,
    onClick: onClick
  }, type && (0, _core.jsx)("p", {
    css: css.news
  }, type.toUpperCase(), reviewedDate && (0, _core.jsx)(_react["default"].Fragment, null, ": ", (0, _core.jsx)(_DateFormat.DateFormat, {
    date: reviewedDate,
    showDate: true
  }))), (0, _core.jsx)("p", {
    css: css.headline,
    className: "listItemHeadline"
  }, headline), children, preamble && (0, _core.jsx)("p", {
    css: css.preambleStyle
  }, preamble), bottomText && (0, _core.jsx)("p", {
    css: css.bottomText
  }, bottomText));
};

exports.ListItem = ListItem;

//# sourceMappingURL=ListItem.js.map