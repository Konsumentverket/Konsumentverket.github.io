"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filePath = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var filePath = "M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 L24,7.61875 Z M18,14.75 L18,15.25 C18,15.6625 17.6625,16 17.25,16 L6.75,16 C6.3375,16 6,15.6625 6,15.25 L6,14.75 C6,14.3375 6.3375,14 6.75,14 L17.25,14 C17.6625,14 18,14.3375 18,14.75 L18,14.75 Z M18,19.25 C18,19.6625 17.6625,20 17.25,20 L6.75,20 C6.3375,20 6,19.6625 6,19.25 L6,18.75 C6,18.3375 6.3375,18 6.75,18 L17.25,18 C17.6625,18 18,18.3375 18,18.75 L18,19.25 Z M18,23.25 C18,23.6625 17.6625,24 17.25,24 L6.75,24 C6.3375,24 6,23.6625 6,23.25 L6,22.75 C6,22.3375 6.3375,22 6.75,22 L17.25,22 C17.6625,22 18,22.3375 18,22.75 L18,23.25 Z M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 L14,8.5 Z";
exports.filePath = filePath;

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
    d: filePath
  }));
};

exports["default"] = _default;

//# sourceMappingURL=File.js.map