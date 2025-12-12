"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _IconCard = require("./IconCard.css");

var _Arrow = _interopRequireDefault(require("../Icons/SystemIcons/Arrow/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var IconCard = _react["default"].forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      text = _ref.text,
      url = _ref.url,
      style = _ref.style,
      onClick = _ref.onClick,
      id = _ref.id;
  var haveIcon = !icon ? _IconCard.noIcon : null;
  return (0, _core.jsx)("a", {
    ref: ref,
    id: id,
    href: url,
    onClick: onClick,
    css: [_IconCard.iconCardStyle, style],
    className: "noStyle"
  }, icon && _react["default"].cloneElement(icon, {
    "aria-hidden": "true",
    style: _IconCard.iconStyle
  }), (0, _core.jsx)("span", {
    css: [_IconCard.iconText, haveIcon],
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), (0, _core.jsx)(_Arrow["default"], {
    "aria-hidden": "true",
    style: _IconCard.arrowStyle
  }));
});

exports.IconCard = IconCard;

//# sourceMappingURL=IconCard.js.map