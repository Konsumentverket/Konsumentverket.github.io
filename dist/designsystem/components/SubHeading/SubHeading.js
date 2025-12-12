"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubHeading = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _SubHeading = require("./SubHeading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SubHeading = function SubHeading(_ref) {
  var children = _ref.children,
      text = _ref.text,
      style = _ref.style,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 2 : _ref$level,
      tag = _ref.tag,
      styleLevel = _ref.styleLevel,
      otherAttr = _objectWithoutProperties(_ref, ["children", "text", "style", "level", "tag", "styleLevel"]);

  var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
  var stylings = [_SubHeading.h1Style, _SubHeading.h2Style, _SubHeading.h3Style, _SubHeading.h4Style, _SubHeading.h5Style, _SubHeading.h6Style, _SubHeading.h7Style];
  var SelectedHeading = tag || headings[level - 1] || 'h2';
  var SelectedStyling = stylings[styleLevel ? styleLevel - 1 : level - 1];
  var alignment = tag == "legend" ? "center" : null; // Ugly fix for firefox

  return (0, _core.jsx)(SelectedHeading, _extends({
    css: [_SubHeading.commonSubHeadingStyle, SelectedStyling, style],
    align: alignment
  }, otherAttr), children, text);
};

exports.SubHeading = SubHeading;

//# sourceMappingURL=SubHeading.js.map