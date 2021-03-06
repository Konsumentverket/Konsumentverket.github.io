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
    height: "20px",
    viewBox: "0 0 32 20"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-584.000000, -1101.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(584.000000, 1101.000000)"
  }, (0, _core.jsx)("path", {
    d: "M21.735,0 L17.44,0 C17.04,0 16.655,0.156193344 16.36,0.437341362 L11.445,5.12314167 C11.44,5.12834811 11.435,5.138761 11.43,5.14396745 C10.6,5.95617284 10.615,7.25257759 11.325,8.05957653 C11.96,8.78327235 13.295,8.97591081 14.13,8.20015054 C14.135,8.19494409 14.145,8.19494409 14.15,8.18973765 L18.145,4.37862007 C18.47,4.07143982 18.98,4.0922656 19.275,4.43068451 C19.575,4.76910342 19.55,5.29495435 19.225,5.60734103 L17.92,6.85168134 L25.2,13.0056991 C25.345,13.1306538 25.475,13.2660213 25.595,13.4065953 L25.595,3.33212466 L22.865,0.48940581 C22.57,0.177019123 22.16,0 21.735,0 Z M27.2,3.34253755 L27.2,14.9997674 C27.2,15.9213082 27.915,16.6658298 28.8,16.6658298 L32,16.6658298 L32,3.34253755 L27.2,3.34253755 Z M29.6,14.9997674 C29.16,14.9997674 28.8,14.6249034 28.8,14.1667363 C28.8,13.7085691 29.16,13.3337051 29.6,13.3337051 C30.04,13.3337051 30.4,13.7085691 30.4,14.1667363 C30.4,14.6249034 30.04,14.9997674 29.6,14.9997674 Z M0,16.6606233 L3.2,16.6606233 C4.085,16.6606233 4.8,15.9161017 4.8,14.994561 L4.8,3.34253755 L0,3.34253755 L0,16.6606233 Z M2.4,13.3337051 C2.84,13.3337051 3.2,13.7085691 3.2,14.1667363 C3.2,14.6249034 2.84,14.9997674 2.4,14.9997674 C1.96,14.9997674 1.6,14.6249034 1.6,14.1667363 C1.6,13.7033627 1.96,13.3337051 2.4,13.3337051 Z M24.195,14.3021038 L16.73,7.99189275 L15.23,9.42366506 C13.745,10.8346116 11.47,10.699244 10.145,9.19458149 C8.8,7.66388673 8.905,5.29495435 10.365,3.89962715 L14.455,0 L10.265,0 C9.84,0 9.435,0.177019123 9.135,0.48940581 L6.4,3.33212466 L6.4,14.9893545 L7.315,14.9893545 L11.84,19.2534328 C13.21,20.41447 15.225,20.1957993 16.34,18.7692335 L16.35,18.7588206 L17.245,19.5658195 C18.04,20.2426573 19.215,20.1124962 19.86,19.2846715 L21.43,17.2749838 L21.7,17.5040674 C22.385,18.0819827 23.395,17.9778538 23.95,17.2593645 L24.425,16.6502104 C24.985,15.931721 24.88,14.8852256 24.195,14.3021038 L24.195,14.3021038 Z",
    id: title != null ? "whitegoods-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=Withdrawal.js.map