"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invertedfieldStyle = exports.invertedLabelStyle = exports.checkbox = exports.labelStyle = exports.wrapperStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _Check = require("../Icons/SystemIcons/Check/Check");

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    &:hover + label {\n        background-color:", ";\n        color: ", ";\n    }\n    &:checked + label {\n        background-color:", ";\n    }\n    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n        background-color:", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  .checkbox-label {\n    font-size: 2.1rem;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  .checkbox + .checkbox-label:before {\n    content: '';\n    background: #fff;\n    border-radius: 2px;\n    border: 1px solid ", ";\n    display: inline-block;\n    vertical-align: middle;\n    width: 32px;\n    height: 32px;\n    margin-right: 1.6rem;\n  }\n\n  .checkbox:checked + .checkbox-label {\n    text-decoration: underline;\n    color: ", ";\n    box-shadow:  0px 0px 0px 5px ", ";\n    background-color: ", ";\n  }\n\n  .checkbox {\n    &:checked + label:before {\n      background: ", ";\n      border: 1px solid ", ";\n    }\n  }\n\n  .tabnav & .checkbox:focus + .checkbox-label {\n    outline: ", " solid 2px;\n    outline-offset: 2px;\n    box-shadow: none;\n  }\n\n  .checkbox:hover + .checkbox-label {\n    box-shadow:  0px 0px 0px 5px ", ";\n    background-color: ", ";\n    text-decoration: underline;\n  }\n\n  .checkbox:checked + .checkbox-label:before {\n    animation: fadein .2s ease-out;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='", "' d='", "'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 100px 100px;\n    background-position: 6px 8px;\n    position: relative;\n  }\n  @keyframes fadein {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([" \n    font-size: 2.1rem;\n    line-height: 3.2rem;\n    border-radius: .8px;\n    display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n    position: relative;\n    display: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapperStyle = (0, _core.css)(_templateObject());
exports.wrapperStyle = wrapperStyle;
var labelStyle = (0, _core.css)(_templateObject2());
exports.labelStyle = labelStyle;
var checkbox = (0, _core.css)(_templateObject3(), _Colors.colors.theme1.mid, _Colors.colors.theme1.dark, _Colors.colors.theme1.midLight, _Colors.colors.theme1.midLight, _Colors.colors.theme1.dark, _Colors.colors.theme1.mid, _Colors.colors.states.focus, _Colors.colors.theme1.midLight, _Colors.colors.theme1.midLight, encodeURIComponent('#fff'), _Check.checkPath);
exports.checkbox = checkbox;
var invertedLabelStyle = (0, _core.css)(_templateObject4(), _Colors.colors.common.white);
exports.invertedLabelStyle = invertedLabelStyle;
var invertedfieldStyle = (0, _core.css)(_templateObject5(), _Colors.colors.common.white, _Colors.colors.theme1.xDark, _Colors.colors.common.white);
exports.invertedfieldStyle = invertedfieldStyle;

//# sourceMappingURL=FormCheckbox.css.js.map