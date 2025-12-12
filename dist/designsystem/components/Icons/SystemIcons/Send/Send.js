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
    d: "M22.3144203,0.151456604 L0.585529016,12.6871751 C-0.262999426,13.1747274 -0.15517537,14.356104 0.68866507,14.7123922 L5.67201167,16.8032413 L19.1406427,4.93321909 C19.3984828,4.70350698 19.764147,5.05510716 19.5438109,5.3223233 L8.25041301,19.0816105 L8.25041301,22.8554524 C8.25041301,23.961821 9.58649371,24.3978052 10.242814,23.5961568 L13.2196956,19.9723309 L19.0609466,22.4194682 C19.726643,22.7007484 20.4860994,22.2835161 20.6079874,21.5662518 L23.9833492,1.31408121 C24.1427413,0.367104716 23.1254448,-0.31734364 22.3144203,0.151456604 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Send.js.map