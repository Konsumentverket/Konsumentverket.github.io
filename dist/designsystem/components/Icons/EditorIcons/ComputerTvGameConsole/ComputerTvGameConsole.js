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
    height: "26px",
    viewBox: "0 0 32 26"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-880.000000, -1650.000000)"
  }, (0, _core.jsx)("path", {
    d: "M883.2,1667.6 L908.8,1667.6 L908.8,1653.2 L883.2,1653.2 L883.2,1667.6 Z M909.6,1650 L882.4,1650 C881.0745,1650 880,1651.0745 880,1652.4 L880,1668.4 C880,1669.7255 881.0745,1670.8 882.4,1670.8 L909.6,1670.8 C910.9255,1670.8 912,1669.7255 912,1668.4 L912,1652.4 C912,1651.0745 910.9255,1650 909.6,1650 L909.6,1650 Z M906,1672.4 L886,1672.4 C885.33725,1672.4 884.8,1672.93725 884.8,1673.6 L884.8,1674.4 C884.8,1675.06275 885.33725,1675.6 886,1675.6 L906,1675.6 C906.66275,1675.6 907.2,1675.06275 907.2,1674.4 L907.2,1673.6 C907.2,1672.93725 906.66275,1672.4 906,1672.4 L906,1672.4 Z",
    id: title != null ? "compTvConsole-".concat(title) : null
  }))));
};

exports["default"] = _default;

//# sourceMappingURL=ComputerTvGameConsole.js.map