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
    width: "43px",
    height: "43px",
    viewBox: "0 0 43 43"
  }, otherAttr, {
    version: "1.1"
  }), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, (0, _core.jsx)("g", {
    transform: "translate(-250.000000, -2242.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(251.000000, 2243.000000)"
  }, (0, _core.jsx)("g", null, (0, _core.jsx)("g", {
    fill: "#FFFFFF",
    stroke: "#B50255",
    strokeWidth: "2"
  }, (0, _core.jsx)("circle", {
    cx: "20.5",
    cy: "20.5",
    r: "20.5"
  })), (0, _core.jsx)("g", {
    transform: "translate(21.000000, 20.500000) scale(-1, 1) translate(-21.000000, -20.500000) translate(18.000000, 10.000000)"
  }, (0, _core.jsx)("path", {
    d: "M3,14 C1.34315217,14 0,15.5670109 0,17.5 C0,19.4329891 1.34315217,21 3,21 C4.65684783,21 6,19.4329891 6,17.5 C6,15.5670109 4.65684783,14 3,14",
    fill: "#B50255"
  }), (0, _core.jsx)("path", {
    d: "M0.0223022727,0.949035 L0.528075,11.149035 C0.551734091,11.626335 0.910506818,11.999985 1.34502955,11.999985 L4.65498409,11.999985 C5.08943864,11.999985 5.44827955,11.626335 5.47193864,11.149035 L5.97771136,0.949035 C6.00327955,0.433485 5.63012045,-1.5e-05 5.16075682,-1.5e-05 L0.839188636,-1.5e-05 C0.369825,-1.5e-05 -0.00326590909,0.433485 0.0223022727,0.949035",
    fill: "#B50255"
  })))))));
};

exports["default"] = _default;

//# sourceMappingURL=Exclamationmark.js.map