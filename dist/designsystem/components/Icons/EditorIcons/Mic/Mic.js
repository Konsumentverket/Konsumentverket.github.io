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
    width: "34",
    height: "48",
    viewBox: "0 0 34 48"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M 12.923 26.524 C 11.682 25.812 10.689 24.854 9.95 23.655 C 9.21 22.455 8.84 21.14 8.84 19.711 L 8.84 7.873 C 8.84 6.442 9.21 5.127 9.95 3.925 C 10.689 2.73 11.682 1.772 12.923 1.056 C 14.159 0.343 15.523 -0.019 17.001 -0.019 C 18.486 -0.019 19.846 0.343 21.086 1.056 C 22.329 1.772 23.315 2.73 24.059 3.925 C 24.798 5.127 25.167 6.442 25.167 7.873 L 25.167 19.711 C 25.167 21.14 24.798 22.455 24.059 23.655 C 23.315 24.854 22.329 25.812 21.086 26.524 C 19.846 27.241 18.486 27.6 17.001 27.6 C 15.523 27.6 14.159 27.241 12.923 26.524 L 12.923 26.524 Z M 6.118 43.379 L 14.282 43.379 L 14.282 35.312 C 11.651 34.903 9.262 33.991 7.114 32.573 C 4.966 31.158 3.265 29.337 2.013 27.117 C 0.757 24.897 0.13 22.425 0.13 19.711 L 0.13 13.792 L 4.752 13.792 L 4.752 19.711 C 4.752 22.019 5.298 24.068 6.388 25.868 C 7.478 27.661 8.957 29.061 10.835 30.054 C 12.709 31.047 14.765 31.542 17.001 31.542 C 19.241 31.542 21.295 31.047 23.174 30.054 C 25.048 29.061 26.531 27.661 27.616 25.868 C 28.706 24.068 29.252 22.019 29.252 19.711 L 29.252 13.792 L 33.879 13.792 L 33.879 19.711 C 33.879 22.398 33.252 24.859 31.996 27.095 C 30.74 29.328 29.03 31.158 26.868 32.573 C 24.706 33.991 22.329 34.903 19.727 35.312 L 19.727 43.379 L 27.89 43.379 L 27.89 47.981 L 6.118 47.981 L 6.118 43.379 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Mic.js.map