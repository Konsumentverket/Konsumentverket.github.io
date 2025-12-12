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
    d: "M15.25,0 L11.25,0 C10.5821875,0 10.2484375,0.8096875 10.71875,1.28125 L11.8353125,2.3978125 L4.21875,10.0115625 C3.92534375,10.3039688 3.92453125,10.7788125 4.21690625,11.07225 C4.2175,11.0728438 4.218125,11.0734688 4.21875,11.0740625 L4.9271875,11.78125 C5.2195625,12.0746563 5.6944375,12.0754688 5.98784375,11.7830938 C5.98846875,11.7824688 5.9890625,11.781875 5.9896875,11.78125 L13.6025,4.16625 L14.71875,5.28125 C15.1875,5.75 16,5.421875 16,4.75 L16,0.75 C16,0.33578125 15.6642187,0 15.25,0 M13.5,10 L12.5,10 C12.2238438,10 12,10.2238438 12,10.5 L12,14 L2,14 L2,4 L6.5,4 C6.776125,4 7,3.776125 7,3.5 L7,2.5 C7,2.223875 6.776125,2 6.5,2 L1.5,2 C0.6715625,2 0,2.6715625 0,3.5 L0,14.5 C0,15.3284375 0.6715625,16 1.5,16 L12.5,16 C13.3284375,16 14,15.3284375 14,14.5 L14,10.5 C14,10.2238438 13.7761562,10 13.5,10"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=External.js.map