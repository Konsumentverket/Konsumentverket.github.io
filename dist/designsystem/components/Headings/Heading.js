"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _SubHeading = require("../SubHeading/SubHeading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Heading = function Heading(_ref) {
  var text = _ref.text,
      style = _ref.style,
      children = _ref.children,
      otherAttr = _objectWithoutProperties(_ref, ["text", "style", "children"]);

  return (0, _core.jsx)(_SubHeading.SubHeading, _extends({
    "data-nosnippet": "true",
    "data-addsearch": "exclude",
    style: style,
    level: 1,
    text: text
  }, otherAttr), children);
};

exports.Heading = Heading;

//# sourceMappingURL=Heading.js.map