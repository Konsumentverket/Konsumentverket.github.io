"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayAlphabet = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var css = _interopRequireWildcard(require("./DisplayAlphabet.css.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'];

var isVisibleLetter = function isVisibleLetter(visibleLetters, letter) {
  return visibleLetters && Array.isArray(visibleLetters) && visibleLetters.some(function (v) {
    return v === letter;
  });
};

var DisplayAlphabet = function DisplayAlphabet(_ref) {
  var onClickLetter = _ref.onClickLetter,
      onClickShowAll = _ref.onClickShowAll,
      activeLetter = _ref.activeLetter,
      visibleLetters = _ref.visibleLetters,
      _ref$displayShowAllLi = _ref.displayShowAllLink,
      displayShowAllLink = _ref$displayShowAllLi === void 0 ? true : _ref$displayShowAllLi;
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)("div", {
    css: css.alphabetWrapper
  }, alphabet.map(function (letter) {
    return isVisibleLetter(visibleLetters, letter) ? (0, _core.jsx)("a", {
      key: letter,
      css: [css.letter, letter === activeLetter ? css.activeLetter : null],
      href: visibleLetters.some(function (v) {
        return v === letter;
      }) ? "?letter=".concat(letter) : "/",
      "data-letter": letter,
      onClick: onClickLetter
    }, letter) : (0, _core.jsx)("span", {
      key: letter,
      css: [css.letter, css.invalidLetter]
    }, letter);
  })), displayShowAllLink && (0, _core.jsx)("div", {
    css: css.linkShowAllWrapper
  }, (0, _core.jsx)("a", {
    css: css.linkShowAll,
    href: "?letter=alla",
    onClick: onClickShowAll
  }, "Visa Alla A-\xD6")));
};

exports.DisplayAlphabet = DisplayAlphabet;

//# sourceMappingURL=DisplayAlphabet.js.map