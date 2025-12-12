"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _TagBlock = require("./TagBlock.css");

var _Tag = require("../Tag/Tag");

var _LinkArrow = _interopRequireDefault(require("../Icons/SystemIcons/LinkArrow/LinkArrow"));

var _Arrow = _interopRequireDefault(require("../Icons/SystemIcons/Arrow/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var GetTags = function GetTags(tags, onClick) {
  return (0, _core.jsx)("ul", {
    css: _TagBlock.tagsList
  }, tags.slice(0, 3).map(function (child, idx) {
    return (0, _core.jsx)("li", {
      key: "lcbc-".concat(idx),
      css: _TagBlock.tagsListItem
    }, (0, _core.jsx)(_Tag.Tag, {
      id: idx,
      onClick: onClick,
      url: child.url,
      text: child.titleInNavigation && child.titleInNavigation || child.title && child.title || child.headline && child.headline,
      style: _TagBlock.tagItem
    }));
  }));
};

var TagBlock = _react["default"].forwardRef(function (_ref, ref) {
  var _ref$invertedColors = _ref.invertedColors,
      invertedColors = _ref$invertedColors === void 0 ? false : _ref$invertedColors,
      heading = _ref.heading,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      headingUrl = _ref.headingUrl,
      icon = _ref.icon,
      tags = _ref.tags,
      alternativeTagText = _ref.alternativeTagText,
      style = _ref.style,
      onClick = _ref.onClick,
      _ref$secondaryArrowSt = _ref.secondaryArrowStyle,
      secondaryArrowStyle = _ref$secondaryArrowSt === void 0 ? false : _ref$secondaryArrowSt;
  var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
  var SelectedHeading = headings[headingLevel - 1] || 'h2';
  var EditorIcon = icon;
  return (0, _core.jsx)("div", {
    css: [_TagBlock.tagBlockItem, invertedColors ? _TagBlock.invertedTag : null, style]
  }, (0, _core.jsx)("a", {
    ref: ref,
    href: headingUrl,
    css: _TagBlock.tagLink,
    className: "noStyle",
    onClick: onClick
  }, icon && (0, _core.jsx)(EditorIcon, {
    "aria-hidden": "true",
    css: _TagBlock.iconStyle
  }), (0, _core.jsx)(SelectedHeading, {
    className: "tagHeading",
    css: [_TagBlock.tagHeading, icon != null ? _TagBlock.tagIconHeading : null]
  }, heading), secondaryArrowStyle ? (0, _core.jsx)(_LinkArrow["default"], {
    "aria-hidden": "true",
    style: _TagBlock.secondaryArrowStyleCSS
  }) : (0, _core.jsx)(_Arrow["default"], {
    "aria-hidden": "true",
    style: _TagBlock.arrowStyle
  })), (0, _core.jsx)("div", {
    css: _TagBlock.tagsArea
  }, tags && tags.length > 0 ? GetTags(tags, onClick) : (0, _core.jsx)("p", {
    css: _TagBlock.tagItemText
  }, alternativeTagText)));
});

exports.TagBlock = TagBlock;

//# sourceMappingURL=TagBlock.js.map