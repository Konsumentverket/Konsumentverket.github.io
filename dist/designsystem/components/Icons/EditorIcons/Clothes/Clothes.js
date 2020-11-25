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
    height: "29px",
    viewBox: "0 0 32 29"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-904.000000, -422.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(904.000000, 422.000000)"
  }, (0, _core.jsx)("path", {
    d: "M10.2522667,0.975259259 C10.6234667,0.902222222 11.1002667,1.13959259 11.1834667,1.51014815 C11.6517333,3.58418519 13.2325333,5.1662963 15.8917333,5.1662963 C18.552,5.1662963 20.168,3.58418519 20.6341333,1.51014815 C20.7184,1.13959259 21.2112,0.902222222 21.5824,0.975259259 C22.8752,1.22337037 24.2245333,1.5617037 25.4810667,1.99025926 L25.4810667,1.99025926 L31.4224,4.73666667 C31.5962667,4.81722222 31.7456,4.96544444 31.8074667,5.14588889 C31.8704,5.32740741 31.8757333,5.52611111 31.7872,5.69688889 L31.7872,5.69688889 L29.2389333,10.7944444 C29.0874667,11.0994815 28.728,11.2498519 28.4058667,11.151037 L28.4058667,11.151037 L26.6138667,10.614 L26.6138667,27.9925185 C26.6138667,28.5488889 26.1658667,29 25.6122667,29 L25.6122667,29 L6.28106667,29 C5.72853333,29 5.28053333,28.5488889 5.28053333,27.9925185 L5.28053333,27.9925185 L5.28053333,10.614 L3.46826667,11.151037 C3.144,11.2498519 2.78453333,11.0994815 2.63306667,10.7944444 L2.63306667,10.7944444 L0.0730666667,5.69688889 C-0.0154666667,5.52611111 -0.0208,5.32740741 0.0421333333,5.14588889 C0.102933333,4.96544444 0.252266667,4.81722222 0.426133333,4.73666667 L0.426133333,4.73666667 L6.36213333,1.99025926 C7.61973333,1.5617037 8.95946667,1.22337037 10.2522667,0.975259259 Z M18.9114147,0 C19.2683559,0.511627907 18.6272576,4 15.4995356,4 C12.3718136,4 11.7317124,0.511627907 12.0886535,0 C12.0886535,0 13.0827048,0.511627907 15.4995356,0.511627907 C17.9163664,0.511627907 18.9114147,0 18.9114147,0 Z",
    id: title != null ? "clothes-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=Clothes.js.map