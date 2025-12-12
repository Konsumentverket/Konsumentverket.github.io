"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelStyle = exports.clearInputStyle = exports.invertedBackgroundStyle = exports.searchFieldButtonStyle = exports.searchFieldInputStyle = exports.searchFieldInputWrapperStyles = exports.searchWrapperStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Spacing = require("../Spacing/Spacing");

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.8rem;\n    line-height: 3.2rem;\n    margin-bottom: 0.8rem;\n    display: block;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\n    appearance: none;\n    position: absolute;\n    right: 0px;\n    border: 0px;\n    background-color: transparent;\n    top: 0.55rem;\n    width: 2.8rem;\n    height: 2.8rem;\n    padding: 0;\n    right: 1.6rem;\n    svg{\n        fill: ", ";\n        width: 2.8rem;\n        height: 2.8rem;\n    }\n    &:focus{\n        outline: none;\n    }\n\n    ", " {\n        top: 1.6rem;\n        right: 1.6rem;\n    }\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:none;\n    &:hover, &:active {\n        box-shadow:none;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    white-space: nowrap;\n    width:auto;\n    align-items: center;\n    border-radius: 0 .8rem .8rem 0;\n    margin-right:-.8rem;\n    padding: .8rem 1.6rem;\n    vertical-align: text-top;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    -webkit-appearance: none;\n    background-color: ", ";\n    border-radius: .8rem 0 0 .8rem;\n    border:none;\n    font-size:1.6rem;\n    line-height:2rem;\n    display:flex;\n    flex-grow:1;\n    padding: ", " 4.5rem ", " ", ";\n    color: ", ";\n    border: 2px solid #fff;\n    font-style: normal;\n    font-weight: 500;\n    box-sizing: border-box;\n    width: 100%; \n    height: 100%;\n\n    &::-webkit-search-cancel-button{\n        appearance: none;\n    }\n\n    ", "{\n        font-size:1.8rem;\n        line-height:3.2rem;\n        padding: 1.2rem 6.4rem 1.2rem 1.6rem;\n    }\n\n    &:hover {\n        border: 2px solid ", ";\n    }\n    &:active {\n        border: 2px solid ", ";\n    }\n    &::placeholder {\n        font-style:italic;\n        color: ", ";\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    flex-grow:1;\n    position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    display:flex;\n    flex-direction: row;\n    align-items: stretch;\n    background-color: ", ";\n    margin-right:.8rem;\n    border-radius:.8rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n        background-color: ", ";\n        text-decoration:none;\n        box-shadow:inset 0px 0px 0px 1px ", ";\n        cursor:inherit;\n        &::placeholder {\n            color: ", ";\n        }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var disabled = (0, _core.css)(_templateObject(), _Colors.colors.theme3.xLight, _Colors.colors.theme3.midLight, _Colors.colors.theme3.midLight);
var searchWrapperStyle = (0, _core.css)(_templateObject2(), _Colors.colors.common.white);
exports.searchWrapperStyle = searchWrapperStyle;
var searchFieldInputWrapperStyles = (0, _core.css)(_templateObject3());
exports.searchFieldInputWrapperStyles = searchFieldInputWrapperStyles;
var searchFieldInputStyle = (0, _core.css)(_templateObject4(), _Colors.colors.common.white, _Spacing.spacing.xs, _Spacing.spacing.xs, _Spacing.spacing.s, _Colors.colors.theme1.xDark, _globalStyles.medium, _Colors.colors.theme1.mid, _Colors.colors.theme1.xDark, _Colors.colors.theme3.midDark, disabled);
exports.searchFieldInputStyle = searchFieldInputStyle;
var searchFieldButtonStyle = (0, _core.css)(_templateObject5());
exports.searchFieldButtonStyle = searchFieldButtonStyle;
var invertedBackgroundStyle = (0, _core.css)(_templateObject6());
exports.invertedBackgroundStyle = invertedBackgroundStyle;
var clearInputStyle = (0, _core.css)(_templateObject7(), _Colors.colors.theme1.mid, _globalStyles.medium);
exports.clearInputStyle = clearInputStyle;
var labelStyle = (0, _core.css)(_templateObject8());
exports.labelStyle = labelStyle;

//# sourceMappingURL=FormSearchField.css.js.map