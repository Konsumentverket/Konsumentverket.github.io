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
  }, otherAttr), (0, _core.jsx)("title", null, "$", title), (0, _core.jsx)("defs", null, (0, _core.jsx)("path", {
    d: "M130.499984,17.125 L130.499984,20.875 C130.499984,21.4963281 131.003656,22 131.624984,22 L136.374969,22 C136.996297,22 137.499969,21.4963281 137.499969,20.875 L137.499969,17.125 C137.499969,16.5036719 136.996297,16 136.374969,16 L131.624984,16 C131.003656,16 130.499984,16.5036719 130.499984,17.125 M140.125016,22 L144.875,22 C145.496328,22 146,21.4963281 146,20.875 L146,17.125 C146,16.5036719 145.496328,16 144.875,16 L140.125016,16 C139.503688,16 139.000016,16.5036719 139.000016,17.125 L139.000016,20.875 C139.000016,21.4963281 139.503688,22 140.125016,22 M140.125016,14.5 L144.875,14.5 C145.496328,14.5 146,13.9963281 146,13.375 L146,9.625 C146,9.00367188 145.496328,8.5 144.875,8.5 L140.125016,8.5 C139.503688,8.5 139.000016,9.00367188 139.000016,9.625 L139.000016,13.375 C139.000016,13.9963281 139.503688,14.5 140.125016,14.5 M122,17.125 L122,20.875 C122,21.4963281 122.503672,22 123.125,22 L127.874984,22 C128.496312,22 128.999984,21.4963281 128.999984,20.875 L128.999984,17.125 C128.999984,16.5036719 128.496312,16 127.874984,16 L123.125,16 C122.503672,16 122,16.5036719 122,17.125 M127.874984,8.5 L123.125,8.5 C122.503672,8.5 122,9.00367188 122,9.625 L122,13.375 C122,13.9963281 122.503672,14.5 123.125,14.5 L127.874984,14.5 C128.496312,14.5 128.999984,13.9963281 128.999984,13.375 L128.999984,9.625 C128.999984,9.00367188 128.496312,8.5 127.874984,8.5 M137.500016,5.875 L137.500016,2.125 C137.500016,1.50367188 136.996344,1 136.375016,1 L131.624984,1 C131.003656,1 130.499984,1.50367188 130.499984,2.125 L130.499984,5.875 C130.499984,6.49632812 131.003656,7 131.624984,7 L136.374969,7 C136.996344,7 137.500016,6.49632812 137.500016,5.875 M139.000016,2.125 L139.000016,5.875 C139.000016,6.49632812 139.503688,7 140.125016,7 L144.875,7 C145.496328,7 146,6.49632812 146,5.875 L146,2.125 C146,1.50367188 145.496328,1 144.875,1 L140.125016,1 C139.503688,1 139.000016,1.50367188 139.000016,2.125 M137.500016,13.375 L137.500016,9.625 C137.500016,9.00367188 136.996344,8.5 136.375016,8.5 L131.624984,8.5 C131.003656,8.5 130.499984,9.00367188 130.499984,9.625 L130.499984,13.375 C130.499984,13.9963281 131.003656,14.5 131.624984,14.5 L136.374969,14.5 C136.996344,14.5 137.500016,13.9963281 137.500016,13.375 M128.999984,2.125 L128.999984,5.875 C128.999984,6.49632812 128.496312,7 127.874984,7 L123.125,7 C122.503672,7 122,6.49632812 122,5.875 L122,2.125 C122,1.50367188 122.503672,1 123.125,1 L127.874984,1 C128.496312,1 128.999984,1.50367188 128.999984,2.125",
    id: "path-1-picturelist"
  })), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "inherit",
    fillRule: "evenodd"
  }, (0, _core.jsx)("g", null, (0, _core.jsx)("g", {
    transform: "translate(-122.000000, 0.000000)"
  }, (0, _core.jsx)("mask", {
    id: "mask-2-picturelist"
  }, (0, _core.jsx)("use", {
    href: "#path-1-picturelist"
  })), (0, _core.jsx)("use", {
    href: "#path-1-picturelist"
  }), (0, _core.jsx)("g", {
    mask: "url(#mask-2-picturelist)"
  }, (0, _core.jsx)("g", {
    transform: "translate(122.000000, 0.000000)"
  }, (0, _core.jsx)("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  })))))));
};

exports["default"] = _default;

//# sourceMappingURL=Picturelist.js.map