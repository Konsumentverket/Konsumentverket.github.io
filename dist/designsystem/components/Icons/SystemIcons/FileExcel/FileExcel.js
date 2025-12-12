"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fileExcelPath = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var fileExcelPath = "M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.75625,15.15625 L14,21 L17.75625,26.84375 C18.075,27.34375 17.71875,28 17.125,28 L14.94375,28 C14.66875,28 14.4125,27.85 14.28125,27.60625 C13.05625,25.34375 12,23.3125 12,23.3125 C11.6,24.2375 11.375,24.5625 9.7125,27.6125 C9.58125,27.85625 9.33125,28.00625 9.05625,28.00625 L6.875,28.00625 C6.28125,28.00625 5.925,27.35 6.24375,26.85 L10.0125,21.00625 L6.24375,15.1625 C5.91875,14.6625 6.28125,14.0062057 6.875,14.0062057 L9.05,14.0062057 C9.325,14.0062057 9.58125,14.15625 9.7125,14.4 C11.34375,17.45 10.9625,16.5 12,18.68125 C12,18.68125 12.38125,17.95 14.2875,14.4 C14.41875,14.15625 14.675,14.0062057 14.95,14.0062057 L17.125,14.0062057 C17.71875,14 18.075,14.65625 17.75625,15.15625 Z M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 Z";
exports.fileExcelPath = fileExcelPath;

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
    d: fileExcelPath
  }));
};

exports["default"] = _default;

//# sourceMappingURL=FileExcel.js.map