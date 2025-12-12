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
    height: "29px",
    viewBox: "0 0 32 29"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-584.000000, -533.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(584.000000, 533.000000)"
  }, (0, _core.jsx)("path", {
    d: "M6,29 L26,29 L26,6.21428571 L24,6.21428571 L24,3.10714286 C24,1.39109375 22.656875,0 21,0 L11,0 C9.343125,0 8,1.39109375 8,3.10714286 L8,6.21428571 L6,6.21428571 L6,29 Z M12,4.14285714 L20,4.14285714 L20,6.21428571 L12,6.21428571 L12,4.14285714 Z M32,9.32142857 L32,25.8928571 C32,27.6089062 30.656875,29 29,29 L28,29 L28,6.21428571 L29,6.21428571 C30.656875,6.21428571 32,7.60537946 32,9.32142857 Z M4,29 L3,29 C1.343125,29 0,27.6089062 0,25.8928571 L0,9.32142857 C0,7.60537946 1.343125,6.21428571 3,6.21428571 L4,6.21428571 L4,29 Z",
    id: title != null ? "travel-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=Travel.js.map