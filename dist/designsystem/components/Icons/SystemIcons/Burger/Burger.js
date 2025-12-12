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
    width: "24",
    height: "21",
    viewBox: "0 0 24 21",
    className: className,
    css: style
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M0.857142857,3.5 L23.1428571,3.5 C23.6162679,3.5 24,3.15179861 24,2.72222222 L24,0.777777778 C24,0.348201389 23.6162679,0 23.1428571,0 L0.857142857,0 C0.383732143,0 0,0.348201389 0,0.777777778 L0,2.72222222 C0,3.15179861 0.383732143,3.5 0.857142857,3.5 Z M0.857142857,11.6666667 L23.1428571,11.6666667 C23.6162679,11.6666667 24,11.3184653 24,10.8888889 L24,8.94444444 C24,8.51486806 23.6162679,8.16666667 23.1428571,8.16666667 L0.857142857,8.16666667 C0.383732143,8.16666667 0,8.51486806 0,8.94444444 L0,10.8888889 C0,11.3184653 0.383732143,11.6666667 0.857142857,11.6666667 Z M0.857142857,21 L23.1428571,21 C23.6162679,21 24,20.6517986 24,20.2222222 L24,18.2777778 C24,17.8482014 23.6162679,17.5 23.1428571,17.5 L0.857142857,17.5 C0.383732143,17.5 0,17.8482014 0,18.2777778 L0,20.2222222 C0,20.6517986 0.383732143,21 0.857142857,21 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Burger.js.map