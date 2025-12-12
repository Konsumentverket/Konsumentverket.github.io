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
    width: "16px",
    height: "16px",
    viewBox: "0 0 16 16"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M30.5001686,30.4989389 C28.2907779,30.4989389 26.5000648,28.7115592 26.5000648,26.4995019 C26.5000648,24.2901112 28.2874445,22.4993981 30.5001686,22.4993981 C32.7102259,22.4993981 34.5002723,24.2874445 34.5002723,26.4995019 C34.5002723,28.7082258 32.7128926,30.4989389 30.5001686,30.4989389 M39.7824092,33.833692 L36.6669951,30.7176112 C36.5263248,30.5769409 36.3349865,30.4989389 36.135648,30.4989389 L35.6256348,30.4989389 C36.4883238,29.3962436 37.0003371,28.0088743 37.0003371,26.4995019 C37.0003371,22.9094088 34.0909283,20 30.5001686,20 C26.9094088,20 24,22.9094088 24,26.4995019 C24,30.0902616 26.9094088,32.9990037 30.5001686,32.9990037 C32.0102077,32.9990037 33.397577,32.4863238 34.5002723,31.6236347 L34.5002723,32.133648 C34.5002723,32.3336531 34.578941,32.5243248 34.7196113,32.6643284 L37.8350254,35.7804092 C38.129033,36.0737501 38.6043787,36.0737501 38.8943862,35.7804092 L39.7790758,34.8957196 C40.0730834,34.601712 40.0730834,34.127033 39.7824092,33.833692",
    transform: "translate(-24 -20)"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Search.js.map