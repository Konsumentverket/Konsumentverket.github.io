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
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("defs", null, (0, _core.jsx)("path", {
    d: "M22.8738303,0 L1.12627192,0 C0.126990862,0 -0.377196542,1.21246835 0.330850198,1.92051499 L8.99995792,10.5909809 L8.99995792,20.2499933 C8.99995792,20.6170713 9.17906726,20.9610868 9.4798172,21.1716493 L13.2298634,23.7957109 C13.9696445,24.3135857 14.9999568,23.7887265 14.9999568,22.8740549 L14.9999568,10.5909809 L23.6693926,1.92051499 C24.3759862,1.2138746 23.8751738,0 22.8738303,0",
    id: "icon-filter"
  })), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "inherit",
    fillRule: "evenodd"
  }, (0, _core.jsx)("g", null, (0, _core.jsx)("g", null, (0, _core.jsx)("mask", {
    id: "mask-2-filter"
  }, (0, _core.jsx)("use", {
    href: "#icon-filter"
  })), (0, _core.jsx)("use", {
    href: "#icon-filter"
  }), (0, _core.jsx)("g", {
    mask: "url(#mask-2-filter)"
  }, (0, _core.jsx)("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }))))));
};

exports["default"] = _default;

//# sourceMappingURL=Filter.js.map