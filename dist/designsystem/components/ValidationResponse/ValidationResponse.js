"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationResponse = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var css = _interopRequireWildcard(require("./ValidationResponse.css"));

var _Check = _interopRequireDefault(require("../Icons/SystemIcons/Check/Check"));

var _Clear = _interopRequireDefault(require("../Icons/SystemIcons/Clear/Clear"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var ValidationResponse = function ValidationResponse(_ref) {
  var _ref$success = _ref.success,
      success = _ref$success === void 0 ? false : _ref$success,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      children = _ref.children;
  return (0, _core.jsx)("div", {
    css: css.wrapper(success)
  }, success ? (0, _core.jsx)(_Check["default"], null) : (0, _core.jsx)(_Clear["default"], null), text, children);
};

exports.ValidationResponse = ValidationResponse;

//# sourceMappingURL=ValidationResponse.js.map