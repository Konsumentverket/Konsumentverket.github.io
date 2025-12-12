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
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-256.000000, -716.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(256.000000, 716.000000)"
  }, (0, _core.jsx)("path", {
    d: "M31.2186321,12.5 C31.8220402,12.5 32.1996569,13.1346843 31.8885448,13.6327467 C30.2544119,16.249496 27.2778581,18 23.8767775,18 C18.7366488,18 14.5660607,14.0016216 14.533879,9.05756029 C14.5015674,4.0918115 18.7217258,0 23.8769073,0 C27.2742896,0 30.2481183,1.74681207 31.8834191,4.35893644 C32.1973211,4.86037381 31.8263873,5.5 31.2185023,5.5 L24.3958383,5.5 L21.8005346,9 L24.3958383,12.5 L31.2186321,12.5 Z M20.0816001,18.312683 L7.08873134,30.82843 C5.46705584,32.3904921 2.83794834,32.3905546 1.21620796,30.82843 C-0.405402654,29.2663054 -0.405402654,26.733681 1.21620796,25.1715564 L14.2086874,12.6562469 C15.2571901,15.2310588 17.4075938,17.3021833 20.0816001,18.312683 Z M6.74777332,26.9999938 C6.74777332,26.1715561 6.05060987,25.4999938 5.19059112,25.4999938 C4.33057236,25.4999938 3.63340891,26.1715561 3.63340891,26.9999938 C3.63340891,27.8284307 4.33057236,28.4999938 5.19059112,28.4999938 C6.05060987,28.4999938 6.74777332,27.8284307 6.74777332,26.9999938 Z",
    id: title != null ? "craftsman-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=Craftsman.js.map