"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconStyle = exports.buttonIconRight = exports.buttonIconLeft = exports.invertedSecondaryBackgroundStyle = exports.invertedBackgroundStyle = exports.secondaryStyle = exports.buttonStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    fill:", ";\n    width: 1.6rem;\n    height: 1.6rem;\n    vertical-align: baseline;\n    top: 2px;\n    ", " {\n        top: 0;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    svg {\n        padding-left:.8rem;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    svg {\n        padding-right:.8rem;\n     }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    color: ", ";\n    svg {\n            fill:", "; \n        }\n    &:hover, &:active, &.selectedButtonStyle {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n    &:disabled {\n        ", "\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    &:hover, &:active, &.selectedButtonStyle {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color:transparent;\n    color:", ";\n    box-shadow:inset 0px 0px 0px 1px ", ";\n\n    svg {\n        fill: ", ";\n    }\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n        text-decoration:underline;\n        border-color:", ";\n        box-shadow: inset 0 0 0 2px ", ";\n    }\n    &:active {\n        color:", ";\n        background-color:", ";\n        box-shadow:none;\n        svg {\n            fill:", "; \n        }\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-decoration: none;\n    text-align: center;\n    display: inline-block;\n    font-size:1.6rem;\n    line-height:2.4rem;\n    font-weight:500;\n    padding: .8rem 2.4rem;\n    color: ", ";\n    border-radius:.8rem;\n    width:100%;\n    box-sizing: border-box;\n    cursor:pointer;\n    background-color:", ";\n\n    svg {\n        fill: ", ";\n        flex-shrink: 0;\n    }\n\n    ", "{\n        font-size:2.1rem;\n        line-height:2.4rem;\n        width:auto;\n        padding:1.6rem 2.4rem;\n    }\n\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:active{\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n    color: ", ";\n    background-color: ", ";\n    text-decoration:none;\n    box-shadow:none;\n    cursor:inherit;\n    svg {\n        fill:", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var disabled = (0, _core.css)(_templateObject(), _Colors.colors.theme3.mid, _Colors.colors.theme3.midLight, _Colors.colors.theme3.mid);
var buttonStyle = (0, _core.css)(_templateObject2(), _Colors.colors.common.white, _Colors.colors.buttons.primary.backgroundColor, _Colors.colors.common.white, _globalStyles.medium, _Colors.colors.buttons.primary.hover, _Colors.colors.buttons.primary.active, disabled);
exports.buttonStyle = buttonStyle;
var secondaryStyle = (0, _core.css)(_templateObject3(), _Colors.colors.buttons.secondary.textColor, _Colors.colors.buttons.secondary.borderColor, _Colors.colors.buttons.secondary.textColor, _Colors.colors.buttons.secondary.hover, _Colors.colors.theme1.xDark, _Colors.colors.buttons.secondary.borderColor, _Colors.colors.common.white, _Colors.colors.buttons.secondary.active, _Colors.colors.common.white, disabled);
exports.secondaryStyle = secondaryStyle;
var invertedBackgroundStyle = (0, _core.css)(_templateObject4(), _Colors.colors.common.white, _Colors.colors.theme1.dark);
exports.invertedBackgroundStyle = invertedBackgroundStyle;
var invertedSecondaryBackgroundStyle = (0, _core.css)(_templateObject5(), _Colors.colors.common.white, _Colors.colors.common.white, _Colors.colors.common.white, _Colors.colors.common.white, _Colors.colors.theme1.midDark, _Colors.colors.theme1.dark, disabled);
exports.invertedSecondaryBackgroundStyle = invertedSecondaryBackgroundStyle;
var buttonIconLeft = (0, _core.css)(_templateObject6());
exports.buttonIconLeft = buttonIconLeft;
var buttonIconRight = (0, _core.css)(_templateObject7());
exports.buttonIconRight = buttonIconRight;
var iconStyle = (0, _core.css)(_templateObject8(), _Colors.colors.common.white, _globalStyles.medium);
exports.iconStyle = iconStyle;

//# sourceMappingURL=Button.css.js.map