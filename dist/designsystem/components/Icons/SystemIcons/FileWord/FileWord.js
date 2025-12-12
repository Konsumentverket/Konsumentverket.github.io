"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fileWordPath = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var fileWordPath = "M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.56875,16 L19.0625,16 C19.54375,16 19.9,16.44375 19.79375,16.91875 L17.41875,27.41875 C17.34375,27.7625 17.0375,28 16.6875,28 L14.3125,28 C13.96875,28 13.66875,27.7625 13.5875,27.43125 C11.975,20.9625 12.2875,22.35625 11.9875,20.525 L11.95625,20.525 C11.8875,21.41875 11.80625,21.6125 10.35625,27.43125 C10.275,27.7625 9.975,28 9.63125,28 L7.3125,28 C6.9625,28 6.65625,27.75625 6.58125,27.4125 L4.21875,16.9125 C4.1125,16.44375 4.46875,16 4.95,16 L6.48125,16 C6.8375,16 7.15,16.25 7.21875,16.60625 C8.19375,21.48125 8.475,23.45 8.53125,24.24375 C8.63125,23.60625 8.9875,22.2 10.36875,16.575 C10.45,16.2375 10.75,16.00625 11.1,16.00625 L12.91875,16.00625 C13.26875,16.00625 13.56875,16.24375 13.65,16.58125 C15.15,22.85625 15.45,24.33125 15.5,24.66875 C15.4875,23.96875 15.3375,23.55625 16.85,16.59375 C16.9125,16.24375 17.21875,16 17.56875,16 L17.56875,16 Z M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 Z";
exports.fileWordPath = fileWordPath;

var _default = function _default(_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return (0, _core.jsx)("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "32px",
    viewBox: "0 0 24 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: fileWordPath
  }));
};

exports["default"] = _default;

//# sourceMappingURL=FileWord.js.map