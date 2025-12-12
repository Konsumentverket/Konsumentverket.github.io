"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkTextWrapper = exports.customFontSize = exports.linkTextCardContentStyle = exports.innerTextWrapperStyle = exports.showAllLink = exports.childrenWrapper = exports.rotateArrow = exports.mainLinkStyle = exports.linkTextMainLinkStyle = exports.linkCardFrame = exports.wrapper = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Spacing = require("../Spacing/Spacing");

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    /* overflow: visible; */\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-size: 2.1rem;\n    line-height: 2.4rem;\n    font-weight: 500;\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\n    width: 100%;\n    font-size: 1.8rem;\n    line-height: 3.2rem;\n    padding-right: 20%;\n    color: ", ";\n    font-weight: 400;\n    margin-top: 1.6rem;\n    display:block;\n    [dir='rtl'] & {\n        padding-left: 20%;\n        padding-right: 0%;\n    }\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    line-height: 2.4rem!important;\n    margin-bottom: 0;\n    padding-bottom: 0;\n    font-size: 2.1rem;\n    display: flex;\n    font-weight: 500 !important;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    color: ", ";\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.4rem;\n    cursor: pointer;\n    display: block;\n    padding: 0;\n    line-height: 2.4rem;\n    margin-top: auto;\n    a{\n        padding: 1.6rem;\n        font-weight: 500 !important;\n        display: block;\n        border-radius: 0 !important;\n    }\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    flex-direction:column;\n    padding: 0 0 1.6rem 0;\n    a{\n        font-weight: normal !important;\n        &:hover{\n            border-radius: 0 !important;\n        }\n    }\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(0deg)!important;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 1.6rem;\n    box-sizing:border-box;\n    text-decoration: none !important;\n\n    &:hover{\n        border-radius: .8rem .8rem 0 0 !important;\n\n        h2 {\n            text-decoration: underline!important;\n        }\n    }\n    &:visited {\n        color: ", "!important;\n\n        svg{\n            fill: ", "!important;\n        }\n    }\n    &:active {\n        background-color: ", "!important;\n        color: ", "!important;\n        h2, span {\n            color: ", "!important;\n        }\n        svg{\n            fill: ", "!important;\n        }\n    }\n\n    .tabnav &:focus {\n        outline: none;\n\n        > *{\n            outline: 4px solid ", ";\n            outline-offset: 6px;\n        }\n    }\n\n\n\n    width: 100%;\n    span{\n        max-width: 84%;\n    }\n    [dir='rtl'] &{\n        svg{\n            right: 1.4rem;;\n            transform: rotate(90deg);\n        }\n    }\n    svg{\n        flex-shrink: 0;\n        height: 3.2rem;\n        width: 3.2rem;\n        position: relative;\n        right: -1.4rem;\n        transform: rotate(-90deg);\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 2.4rem 1.6rem;\n\n    &:hover {\n        box-shadow: inset 0 0 0 2px ", "!important;\n        border-radius: .8rem !important;\n    }\n\n    .tabnav &:focus {\n        outline: 4px solid ", ";\n\n        > *{\n            outline: none;\n        }\n    }\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: inset 0 0 0 1px ", ";\n\n  a:hover {\n    box-shadow: inset -1px 0 0 0 #0061c2,inset 0 1px 0 0 #0061c2,inset 1px 0 0 0 #0061c2;\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border-radius: 0.8rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = (0, _core.css)(_templateObject());
exports.wrapper = wrapper;
var linkCardFrame = (0, _core.css)(_templateObject2(), _Colors.colors.theme1.mid);
exports.linkCardFrame = linkCardFrame;
var linkTextMainLinkStyle = (0, _core.css)(_templateObject3(), _Colors.colors.theme1.mid, _Colors.colors.states.focus);
exports.linkTextMainLinkStyle = linkTextMainLinkStyle;
var mainLinkStyle = (0, _core.css)(_templateObject4(), _Colors.colors.theme1.mid, _Colors.colors.theme1.mid, _Colors.colors.theme1.xDark, _Colors.colors.common.white, _Colors.colors.common.white, _Colors.colors.common.white, _Colors.colors.states.focus);
exports.mainLinkStyle = mainLinkStyle;
var rotateArrow = (0, _core.css)(_templateObject5());
exports.rotateArrow = rotateArrow;
var childrenWrapper = (0, _core.css)(_templateObject6());
exports.childrenWrapper = childrenWrapper;
var showAllLink = (0, _core.css)(_templateObject7());
exports.showAllLink = showAllLink;
var innerTextWrapperStyle = (0, _core.css)(_templateObject8(), _Colors.colors.theme1.mid);
exports.innerTextWrapperStyle = innerTextWrapperStyle;
var linkTextCardContentStyle = (0, _core.css)(_templateObject9(), _Colors.colors.theme3.dark);
exports.linkTextCardContentStyle = linkTextCardContentStyle;
var customFontSize = (0, _core.css)(_templateObject10());
exports.customFontSize = customFontSize;
var linkTextWrapper = (0, _core.css)(_templateObject11());
exports.linkTextWrapper = linkTextWrapper;

//# sourceMappingURL=LinkCard.css.js.map