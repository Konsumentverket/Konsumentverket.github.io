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
    width: "20px",
    height: "32px",
    viewBox: "0 0 20 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-814.000000, -2157.000000)"
  }, (0, _core.jsx)("path", {
    d: "M831,2180.25 C831,2180.6625 830.6625,2181 830.25,2181 L817.75,2181 C817.3375,2181 817,2180.6625 817,2180.25 L817,2160.75 C817,2160.3375 817.3375,2160 817.75,2160 L830.25,2160 C830.6625,2160 831,2160.3375 831,2160.75 L831,2180.25 Z M824,2187 C822.89375,2187 822,2186.10625 822,2185 C822,2183.89375 822.89375,2183 824,2183 C825.10625,2183 826,2183.89375 826,2185 C826,2186.10625 825.10625,2187 824,2187 L824,2187 Z M831,2157 L817,2157 C815.34375,2157 814,2158.34375 814,2160 L814,2186 C814,2187.65625 815.34375,2189 817,2189 L831,2189 C832.65625,2189 834,2187.65625 834,2186 L834,2160 C834,2158.34375 832.65625,2157 831,2157 L831,2157 Z",
    id: title != null ? "mobilephone-".concat(title) : null
  }))));
};

exports["default"] = _default;

//# sourceMappingURL=MobilePhone.js.map