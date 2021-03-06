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
    height: "23px",
    viewBox: "0 0 32 23"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-944.000000, -1652.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(944.000000, 1652.000000)"
  }, (0, _core.jsx)("path", {
    d: "M26.133455,11.82051 C20.370455,6.72401 11.622955,6.72951 5.866455,11.82051 C5.521455,12.12551 5.510455,12.65496 5.837955,12.97796 L7.559955,14.67751 C7.859955,14.97351 8.342955,14.99351 8.662455,14.71746 C12.859955,11.08901 19.149455,11.09701 23.336955,14.71746 C23.656455,14.99351 24.139455,14.97401 24.439455,14.67751 L26.161505,12.97796 C26.489455,12.65496 26.477955,12.12501 26.133455,11.82051 M15.999955,16.00001 C14.232455,16.00001 12.799955,17.43251 12.799955,19.20001 C12.799955,20.96746 14.232455,22.40001 15.999955,22.40001 C17.767455,22.40001 19.199955,20.96746 19.199955,19.20001 C19.199955,17.43251 17.767455,16.00001 15.999955,16.00001 M31.745455,6.14401 C22.886955,-2.04949 9.109455,-2.04649 0.254455,6.14401 C-0.078545,6.45201 -0.085045,6.97351 0.236955,7.29301 L1.948955,8.99151 C2.255955,9.29651 2.749955,9.30301 3.068955,9.01051 C10.364955,2.32651 21.633955,2.32501 28.931455,9.01051 C29.250455,9.30301 29.744455,9.29601 30.051455,8.99151 L31.763455,7.29301 C32.084955,6.97351 32.078455,6.45201 31.745455,6.14401",
    id: title != null ? "fiberbroadband-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=InternetFiberBroadband.js.map