"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filePdfPath = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var filePdfPath = "M11.36875,16.00625 C11.05625,15.00625 11.0625,13.075 11.24375,13.075 C11.76875,13.075 11.71875,15.38125 11.36875,16.00625 Z M11.2625,18.95625 C10.78125,20.21875 10.18125,21.6625 9.4875,22.875 C10.63125,22.4375 11.925,21.8 13.41875,21.50625 C12.625,20.90625 11.8625,20.04375 11.2625,18.95625 Z M5.38125,26.75625 C5.38125,26.80625 6.20625,26.41875 7.5625,24.24375 C7.14375,24.6375 5.74375,25.775 5.38125,26.75625 Z M15.5,10 L24,10 L24,30.5 C24,31.33125 23.33125,32 22.5,32 L1.5,32 C0.66875,32 0,31.33125 0,30.5 L0,1.5 C0,0.66875 0.66875,0 1.5,0 L14,0 L14,8.5 C14,9.325 14.675,10 15.5,10 Z M15,20.7375 C13.75,19.975 12.91875,18.925 12.33125,17.375 C12.6125,16.21875 13.05625,14.4625 12.71875,13.3625 C12.425,11.525 10.06875,11.70625 9.73125,12.9375 C9.41875,14.08125 9.70625,15.69375 10.2375,17.75 C9.5125,19.475 8.44375,21.7875 7.6875,23.1125 C7.68125,23.1125 7.68125,23.11875 7.675,23.11875 C5.98125,23.9875 3.075,25.9 4.26875,27.36875 C4.61875,27.8 5.26875,27.99375 5.6125,27.99375 C6.73125,27.99375 7.84375,26.86875 9.43125,24.13125 C11.04375,23.6 12.8125,22.9375 14.36875,22.68125 C15.725,23.41875 17.3125,23.9 18.36875,23.9 C20.19375,23.9 20.31875,21.9 19.6,21.1875 C18.73125,20.3375 16.20625,20.58125 15,20.7375 L15,20.7375 Z M23.5625,6.5625 L17.4375,0.4375 C17.15625,0.15625 16.775,0 16.375,0 L16,0 L16,8 L24,8 L24,7.61875 C24,7.225 23.84375,6.84375 23.5625,6.5625 Z M18.93125,22.51875 C19.1875,22.35 18.775,21.775 16.25625,21.95625 C18.575,22.94375 18.93125,22.51875 18.93125,22.51875 Z";
exports.filePdfPath = filePdfPath;

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
    d: filePdfPath
  }));
};

exports["default"] = _default;

//# sourceMappingURL=FilePdf.js.map