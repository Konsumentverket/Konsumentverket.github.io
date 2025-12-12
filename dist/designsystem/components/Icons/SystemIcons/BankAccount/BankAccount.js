"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

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
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M4,8.57164286 L4,18.8573571 L2.2,18.8573571 C1.86865,18.8573571 1.6,19.1451964 1.6,19.5002143 L1.6,20.5716429 L22.4,20.5716429 L22.4,19.5002143 C22.4,19.1451964 22.13135,18.8573571 21.8,18.8573571 L20,18.8573571 L20,8.57164286 L16.8,8.57164286 L16.8,18.8573571 L13.6,18.8573571 L13.6,8.57164286 L10.4,8.57164286 L10.4,18.8573571 L7.2,18.8573571 L7.2,8.57164286 L4,8.57164286 Z M22.8,21.4287857 L1.2,21.4287857 C0.53725,21.4287857 0,22.0044107 0,22.7145 L0,23.5716429 C0,23.8083214 0.1791,24.0002143 0.4,24.0002143 L23.6,24.0002143 C23.8209,24.0002143 24,23.8083214 24,23.5716429 L24,22.7145 C24,22.0044107 23.46275,21.4287857 22.8,21.4287857 L22.8,21.4287857 Z M24,5.14307589 L24,6.00021429 C24,6.23689542 23.8209,6.42878795 23.6,6.42878795 L22.4,6.42878795 L22.4,7.07164397 C22.4,7.42666121 22.13135,7.7145 21.8,7.7145 L2.2,7.7145 C1.86865,7.7145 1.6,7.42666121 1.6,7.07164397 L1.6,6.42878795 L0.4,6.42878795 C0.1791,6.42878795 0,6.23689542 0,6.00021429 L0,5.14307589 C0,4.96966548 0.0975,4.81339789 0.24705,4.74707658 L11.84705,0.0327990506 C11.945,-0.0106473026 12.05505,-0.0106473026 12.15295,0.0327990506 L23.75295,4.74707658 C23.9025,4.81339789 24,4.96966548 24,5.14307589 L24,5.14307589 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=BankAccount.js.map