"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return (0, _core.jsx)("svg", _extends({
    className: className,
    css: style,
    width: "34px",
    height: "36px",
    viewBox: "0 0 34 36"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M16.8820031,31.3786969 L16.8749719,4.58963438 L29.2430109,9.74354062 C29.0109094,20.3888531 23.4702844,28.1021344 16.8820031,31.3786969 M31.6757531,5.88338437 L18.1757531,0.258384375 C17.3452922,-0.086146875 16.4118234,-0.086146875 15.5812219,0.258384375 L2.08122188,5.88338437 C0.822698438,6.40369687 -2.8125e-05,7.63416562 -2.8125e-05,8.99822812 C-2.8125e-05,22.9552594 8.05075312,32.6021344 15.5741906,35.7380719 C16.4038781,36.0826031 17.3390344,36.0826031 18.1687922,35.7380719 C24.1945031,33.2279156 33.7499719,24.5583844 33.7499719,8.99822812 C33.7499719,7.63416562 32.9273156,6.40369687 31.6757531,5.88338437"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Insurance.js.map