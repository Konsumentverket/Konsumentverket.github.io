"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandButton = void 0;

var _core = require("@emotion/core");

var _ExpandButton = require("./ExpandButton.css");

var _Arrow = _interopRequireDefault(require("../Icons/SystemIcons/Arrow/Arrow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var ExpandButton = function ExpandButton(_ref) {
  var text = _ref.text,
      _ref$secondaryButtonS = _ref.secondaryButtonStyle,
      secondaryButtonStyle = _ref$secondaryButtonS === void 0 ? false : _ref$secondaryButtonS,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      className = _ref.className,
      id = _ref.id,
      disabled = _ref.disabled,
      style = _ref.style,
      onClick = _ref.onClick;
  var styles = [_ExpandButton.expandButtonStyle];
  secondaryButtonStyle && styles.push(_ExpandButton.secondaryStyle);
  small && styles.push(_ExpandButton.smallStyle);
  style && styles.push(style);
  return (0, _core.jsx)("button", {
    id: id,
    css: styles,
    className: className,
    disabled: disabled,
    "aria-expanded": expanded ? "true" : "false",
    onClick: onClick
  }, (0, _core.jsx)("span", null, text), (0, _core.jsx)(_Arrow["default"], {
    "aria-hidden": "true",
    style: [_ExpandButton.iconStyle, expanded && _ExpandButton.expandedIconStyle]
  }));
};

exports.ExpandButton = ExpandButton;

//# sourceMappingURL=ExpandButton.js.map