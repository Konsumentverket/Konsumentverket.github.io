"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _Tag = require("./Tag.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var Tag = function Tag(_ref) {
  var id = _ref.id,
      url = _ref.url,
      text = _ref.text,
      style = _ref.style,
      onClick = _ref.onClick;
  return (0, _core.jsx)("a", {
    key: id,
    href: url,
    css: [_Tag.tagStyle, style],
    onClick: onClick,
    className: "noStyle"
  }, text);
};

exports.Tag = Tag;

//# sourceMappingURL=Tag.js.map