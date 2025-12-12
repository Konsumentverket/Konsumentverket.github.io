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
    width: "28px",
    height: "32px",
    viewBox: "0 0 28 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-586.000000, -716.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(586.000000, 716.000000)"
  }, (0, _core.jsx)("path", {
    d: "M7.00166922,8 C7.00166922,6.15625 8.01419241,4.5625 9.50172647,3.69375 L9.50172647,16 L12.5017952,16 L12.5017952,3 L15.5018639,3 L15.5018639,16 L18.5019326,16 L18.5019326,3.69375 C19.9894667,4.5625 21.0019898,6.15625 21.0019898,8 L21.0019898,16 L24.0020585,16 L24.0020585,8 C24.0020585,3.58125 20.4207265,0 16.0018753,0 L12.0017837,0 C7.58293253,0 4.00160052,3.58125 4.00160052,8 L4.00160052,16 L7.00166922,16 L7.00166922,8 Z M27.8958977,21.36875 L27.2271324,19.36875 C26.9521261,18.55 26.1896086,18 25.3270889,18 L2.67032003,18 C1.80780027,18 1.04528281,18.55 0.770276514,19.36875 L0.101511199,21.36875 C-0.323498534,22.6625 0.639023508,24 2.00155471,24 L2.00155471,31 C2.00155471,31.55 2.45156502,32 3.00157761,32 L5.00162342,32 C5.55163601,32 6.00164632,31.55 6.00164632,31 L6.00164632,24 L22.0020127,24 L22.0020127,31 C22.0020127,31.55 22.4520231,32 23.0020356,32 L25.0020815,32 C25.552094,32 26.0021044,31.55 26.0021044,31 L26.0021044,24 C27.3646356,24 28.3271576,22.6625 27.8958977,21.36875 Z",
    id: title != null ? "furnitureDeacorations-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=FurnituresAndDecoration.js.map