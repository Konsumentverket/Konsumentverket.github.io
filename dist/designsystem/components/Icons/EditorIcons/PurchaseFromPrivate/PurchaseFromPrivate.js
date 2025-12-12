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
    transform: "translate(-912.000000, -1463.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(912.000000, 1463.000000)"
  }, (0, _core.jsx)("path", {
    d: "M16,18 C20.96875,18 25,13.96875 25,9 C25,4.03125 20.96875,0 16,0 C11.03125,0 7,4.03125 7,9 C7,13.96875 11.03125,18 16,18 Z M24,20 L20.55625,20 C19.16875,20.6375 17.625,21 16,21 C14.375,21 12.8375,20.6375 11.44375,20 L8,20 C3.58125,20 0,23.58125 0,28 L0,29 C0,30.65625 1.34375,32 3,32 L29,32 C30.65625,32 32,30.65625 32,29 L32,28 C32,23.58125 28.41875,20 24,20 Z",
    id: title != null ? "privatepurchase-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=PurchaseFromPrivate.js.map