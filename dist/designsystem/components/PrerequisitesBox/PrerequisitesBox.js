"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrerequisitesBox = void 0;

var _core = require("@emotion/core");

var _PrerequisitesBox = require("./PrerequisitesBox.css");

var _SubHeading = require("../SubHeading/SubHeading");

var _Exclamationmark = _interopRequireDefault(require("../Icons/SystemIcons/Exclamationmark/Exclamationmark"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var PrerequisitesBox = function PrerequisitesBox(_ref) {
  var text = _ref.text,
      children = _ref.children,
      wrapperStyle = _ref.wrapperStyle;
  if (children == null) return null;
  return (0, _core.jsx)("div", {
    css: [_PrerequisitesBox.wrapper, wrapperStyle]
  }, (0, _core.jsx)(_Exclamationmark["default"], {
    style: _PrerequisitesBox.exclamationMarkImage
  }), text && (0, _core.jsx)(_SubHeading.SubHeading, {
    style: _PrerequisitesBox.heading,
    text: text,
    styleLevel: 3
  }), children);
};

exports.PrerequisitesBox = PrerequisitesBox;

//# sourceMappingURL=PrerequisitesBox.js.map