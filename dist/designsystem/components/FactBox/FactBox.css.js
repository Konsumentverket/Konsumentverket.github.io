"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondaryColorStyle = exports.wrapper = void 0;

var _core = require("@emotion/core");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Colors = require("../Colors/Colors");

var _Spacing = require("../Spacing/Spacing");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 0.7rem;\n    padding: ", " ", " ", " ", ";\n    ", " {\n        padding: ", " ", " ", " ", ";\n    }\n    ul {\n        padding-left: 0;\n        li {\n            margin-bottom: 1rem;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = (0, _core.css)(_templateObject(), _Colors.colors.theme3.xLight, _Spacing.spacing.m, _Spacing.spacing.s, _Spacing.spacing.m, _Spacing.spacing.s, _globalStyles.medium, _Spacing.spacing.m, _Spacing.spacing.l, _Spacing.spacing.m, _Spacing.spacing.l);
exports.wrapper = wrapper;
var secondaryColorStyle = (0, _core.css)(_templateObject2(), _Colors.colors.theme2.light);
exports.secondaryColorStyle = secondaryColorStyle;

//# sourceMappingURL=FactBox.css.js.map