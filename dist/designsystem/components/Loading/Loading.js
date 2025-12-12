"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: ", ";\n    height: ", ";\n  \n  &:after {\n    content: \" \";\n    display: block;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    border: ", " solid ", ";\n    border-color: ", " transparent ", " transparent;\n    animation: lds-dual-ring 1.2s linear infinite;\n  }\n  @keyframes lds-dual-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loaderStyle = function loaderStyle(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? _Colors.colors.theme2.midLight : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '80px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "80px" : _ref$height,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? "6px" : _ref$border;
  return (0, _core.css)(_templateObject(), width, height, width, height, border, color, color, color);
};

var _default = function _default(_ref2) {
  var color = _ref2.color,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "small" : _ref2$size,
      style = _ref2.style;
  var sizeStyle = null;

  switch (size) {
    case "small":
      sizeStyle = {
        width: '20px',
        height: '20px',
        border: '3px',
        color: color
      };
  }

  return (0, _core.jsx)("div", {
    css: [loaderStyle(sizeStyle), style],
    "aria-busy": "true",
    className: "lds-dual-ring"
  });
};

exports["default"] = _default;

//# sourceMappingURL=Loading.js.map