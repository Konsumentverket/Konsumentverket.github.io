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
    height: "28px",
    viewBox: "0 0 32 28"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-912.000000, -1097.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(912.000000, 1097.000000)"
  }, (0, _core.jsx)("path", {
    d: "M16,0 C7.1625,0 0,5.81875 0,13 C0,16.1 1.3375,18.9375 3.5625,21.16875 C2.78125,24.31875 0.16875,27.125 0.1375,27.15625 C0,27.3 -0.0375,27.5125 0.04375,27.7 C0.125,27.8875 0.3,28 0.5,28 C4.64375,28 7.75,26.0125 9.2875,24.7875 C11.33125,25.55625 13.6,26 16,26 C24.8375,26 32,20.18125 32,13 C32,5.81875 24.8375,0 16,0 Z M16,21 C14.89375,21 14,20.10625 14,19 C14,17.89375 14.89375,17 16,17 C17.10625,17 18,17.89375 18,19 C18,20.10625 17.10625,21 16,21 Z M17.5875,14.1 C17.5375,14.6125 17.10625,15 16.59375,15 L15.40625,15 C14.89375,15 14.4625,14.6125 14.4125,14.1 L13.6125,6.1 C13.55625,5.5125 14.01875,5 14.60625,5 L17.39375,5 C17.9875,5 18.45,5.5125 18.3875,6.1 L17.5875,14.1 Z",
    id: title != null ? "complaint-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=Complaint.js.map