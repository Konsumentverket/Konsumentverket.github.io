"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkShowAll = exports.linkShowAllWrapper = exports.activeLetter = exports.invalidLetter = exports.letter = exports.alphabetWrapper = void 0;

var _core = require("@emotion/core");

var _Spacing = require("../Spacing/Spacing");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 1.8rem;\n  line-height: ", ";\n  ", " {\n    margin-left: ", ";\n  }\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  padding-right: 0;\n  margin-top: ", ";\n  ", " {\n    padding-right: ", ";\n    justify-content: flex-end;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border: solid ", ";\n  border-width: 0px 8px 3px;\n  border-radius: 8px;\n  margin-top: -1px;\n  background-color:", ";\n  color: ", " !important;\n  :hover {\n    background-color:", " !important;\n    border-color: ", ";\n    color: ", " !important;\n    border-radius: .8rem !important;\n    box-shadow: none !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", " !important;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: ", ";\n  line-height: ", ";\n  margin-right: ", ";\n  ", " {\n    font-size: ", ";\n    line-height: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var alphabetWrapper = (0, _core.css)(_templateObject(), _Spacing.spacing.l);
exports.alphabetWrapper = alphabetWrapper;
var letter = (0, _core.css)(_templateObject2(), _Spacing.spacing.l, _Spacing.spacing.xl, _Spacing.spacing.s, _globalStyles.medium, _Spacing.spacing.m, _Spacing.spacing.l);
exports.letter = letter;
var invalidLetter = (0, _core.css)(_templateObject3(), _Colors.colors.theme3.midDark);
exports.invalidLetter = invalidLetter;
var activeLetter = (0, _core.css)(_templateObject4(), _Colors.colors.theme1.dark, _Colors.colors.theme1.dark, _Colors.colors.common.white, _Colors.colors.theme1.midLight, _Colors.colors.theme1.midLight, _Colors.colors.theme1.mid);
exports.activeLetter = activeLetter;
var linkShowAllWrapper = (0, _core.css)(_templateObject5(), _Spacing.spacing.s, _globalStyles.medium, _Spacing.spacing.l);
exports.linkShowAllWrapper = linkShowAllWrapper;
var linkShowAll = (0, _core.css)(_templateObject6(), _Spacing.spacing.l, _globalStyles.medium, _Spacing.spacing.s);
exports.linkShowAll = linkShowAll;

//# sourceMappingURL=DisplayAlphabet.css.js.map