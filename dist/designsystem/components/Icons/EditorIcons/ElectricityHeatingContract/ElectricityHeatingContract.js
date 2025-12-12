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
    transform: "translate(-1134.000000, -1648.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(1134.000000, 1648.000000)"
  }, (0, _core.jsx)("path", {
    d: "M10,20.18165 L10,7.0004 C10,6.4504 9.55,6.0004 9,6.0004 C8.45,6.0004 8,6.4504 8,7.0004 L8,20.18165 C6.8375,20.59415 6,21.6940875 6,23.0004 C6,24.65665 7.34375,26.0004 9,26.0004 C10.65625,26.0004 12,24.65665 12,23.0004 C12,21.6940875 11.1625,20.59415 10,20.18165 L10,20.18165 Z M9,28.0004 C6.24375,28.0004 4,25.7565875 4,23.0004 C4,21.40665 4.7625,19.9440875 6,19.0129 L6,7.0004 C6,5.34415 7.34375,4.0004 9,4.0004 C10.65625,4.0004 12,5.34415 12,7.0004 L12,19.0129 C13.2375,19.9379 14,21.40665 14,23.0004 C14,25.7565875 11.75625,28.0004 9,28.0004 L9,28.0004 Z M16,7.0004 C16,3.13165 12.86875,0.0004 9,0.0004 C5.13125,0.0004 2,3.13165 2,7.0004 L2,17.40665 C0.76875,18.9504 0,20.8754 0,23.0004 C0,27.96915 4.03125,32.0004 9,32.0004 C13.96875,32.0004 18,27.96915 18,23.0004 C18,20.8754 17.23125,18.9440875 16,17.40665 L16,7.0004 Z M26,8.0004 C24.89375,8.0004 24,7.10665 24,6.0004 C24,4.8940875 24.89375,4.0004 26,4.0004 C27.10625,4.0004 28,4.8940875 28,6.0004 C28,7.10665 27.10625,8.0004 26,8.0004 L26,8.0004 Z M26,0.0004 C22.69375,0.0004 20,2.69415 20,6.0004 C20,9.30665 22.69375,12.0004 26,12.0004 C29.30625,12.0004 32,9.30665 32,6.0004 C32,2.69415 29.30625,0.0004 26,0.0004 L26,0.0004 Z",
    id: title != null ? "electricityHeating-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=ElectricityHeatingContract.js.map