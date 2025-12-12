"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkCard = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _LinkCard = require("./LinkCard.css");

var _SubHeading = require("../SubHeading/SubHeading");

var _LinkArrow = _interopRequireDefault(require("../Icons/SystemIcons/LinkArrow/LinkArrow"));

var _Arrow = _interopRequireDefault(require("../Icons/SystemIcons/Arrow/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var LinkCard = _react["default"].forwardRef(function (_ref, ref) {
  var text = _ref.text,
      href = _ref.href,
      children = _ref.children,
      id = _ref.id,
      _ref$secondaryArrowSt = _ref.secondaryArrowStyle,
      secondaryArrowStyle = _ref$secondaryArrowSt === void 0 ? false : _ref$secondaryArrowSt,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      onClick = _ref.onClick,
      _ref$beforeToggleCoun = _ref.beforeToggleCount,
      beforeToggleCount = _ref$beforeToggleCoun === void 0 ? 3 : _ref$beforeToggleCoun,
      style = _ref.style,
      childrenWrapperStyle = _ref.childrenWrapperStyle;

  var childrenArray = _react["default"].Children.toArray(children);

  var itemsToShow = [];

  if (childrenArray && childrenArray.length > 0) {
    itemsToShow = childrenArray.slice(0, beforeToggleCount).filter(Boolean);
  }

  return (0, _core.jsx)("div", {
    id: id,
    css: [_LinkCard.wrapper, style]
  }, (0, _core.jsx)("a", {
    ref: ref,
    href: href,
    css: _LinkCard.mainLinkStyle,
    onClick: onClick
  }, (0, _core.jsx)(_SubHeading.SubHeading, {
    level: headingLevel,
    styleLevel: 3,
    style: _LinkCard.innerTextWrapperStyle
  }, (0, _core.jsx)("span", {
    css: _LinkCard.customFontSize,
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), secondaryArrowStyle ? (0, _core.jsx)(_LinkArrow["default"], {
    style: _LinkCard.rotateArrow,
    "aria-hidden": "true"
  }) : (0, _core.jsx)(_Arrow["default"], {
    "aria-hidden": "true"
  }))), itemsToShow.length > 0 && (0, _core.jsx)("div", {
    css: [_LinkCard.childrenWrapper, childrenWrapperStyle]
  }, itemsToShow), childrenArray.length > beforeToggleCount && (0, _core.jsx)("span", {
    css: _LinkCard.showAllLink
  }, (0, _core.jsx)("a", {
    href: href,
    onClick: onClick
  }, "Visa alla (", childrenArray.length, ")")));
});

exports.LinkCard = LinkCard;
LinkCard.displayName = "LinkCard";

//# sourceMappingURL=LinkCard.js.map