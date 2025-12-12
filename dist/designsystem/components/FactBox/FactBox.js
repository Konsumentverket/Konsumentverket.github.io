"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FactBox = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _FactBox = require("./FactBox.css");

var _SubHeading = require("../SubHeading/SubHeading");

var _globalStyles = require("../GlobalStyles/globalStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var FactBox = function FactBox(_ref) {
  var children = _ref.children,
      headline = _ref.headline,
      _ref$headlineLevel = _ref.headlineLevel,
      headlineLevel = _ref$headlineLevel === void 0 ? 2 : _ref$headlineLevel,
      content = _ref.content,
      secondaryColor = _ref.secondaryColor,
      style = _ref.style;
  if (!content && !children) return null;
  return (0, _core.jsx)("div", {
    css: [_FactBox.wrapper, _globalStyles.LinkWrapperInvertedColorStyle, secondaryColor && _FactBox.secondaryColorStyle, style]
  }, headline && (0, _core.jsx)(_SubHeading.SubHeading, {
    level: headlineLevel,
    text: headline,
    styleLevel: 3
  }), children, content);
};

exports.FactBox = FactBox;

//# sourceMappingURL=FactBox.js.map