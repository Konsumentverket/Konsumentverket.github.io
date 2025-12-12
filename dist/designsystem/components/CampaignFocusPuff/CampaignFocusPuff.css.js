"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.puffIcon = exports.externalIcon = exports.iconBackground = exports.pictureWrapper = exports.textArea = exports.focusText = exports.focusHeadline = exports.linkWrapper = exports.focusWrapper = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position:absolute;\n  fill: #fff;\n  width:6.4rem;\n  height:6.4rem;\n  left:calc(50% - 3.2rem);\n  top:calc(50% - 3.2rem);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 0.8rem;\n  fill: ", ";\n  width:2rem;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius:.8rem;\n  border-top-left-radius:.8rem;\n  border-bottom-right-radius:0;\n  background-color: ", ";\n  position:relative;\n  padding-top:36.84%;\n\n  ", "{\n    height:100%;\n    padding-top:0;\n    border-top-right-radius:0;\n    border-bottom-left-radius: .8rem;\n    border-bottom-right-radius:0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width:100%;\n  min-height:11.2rem;\n\n  picture {\n    display:block;\n    width:100%;\n    height:100%;\n    min-height:5rem;\n  }\n  img {\n    display:block;\n    width:100%;\n    height:100%;\n    /* height:auto; */\n    border-top-right-radius: .8rem;\n    border-top-left-radius:.8rem;\n  }\n\n  ", "{\n    max-width:49.11%;\n    margin-top:0;\n    margin-left:-.8rem;\n    img {\n      border-top-right-radius: 0;\n      border-bottom-left-radius:.8rem;\n    }\n  }\n\n  ", "{\n    max-width:30.4rem;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding:1.6rem 2.4rem 2.4rem 2.4rem;\n  box-sizing:border-box;\n  ", " {   \n      max-width:50.89%;  \n      display:flex;\n      justify-content:center;\n      flex-direction:column;\n      width:100%;\n  }\n  ", " {   \n      max-width:32.8rem;\n      \n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n  margin:0;\n  padding:0;\n  color:", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  margin: 0 0 .8rem 0;\n  font-weight:700;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-decoration:none;\n  display:flex;\n  flex-shrink: 0;\n\n  &:hover .textarea {\n    background-color: ", ";\n    border-radius: 8px;\n  }\n  &:hover {\n    box-shadow: 0px 0px 0px 2px ", "; \n    border-radius: 8px;\n  }\n  &:active {\n    box-shadow: 0px 0px 0px 2px ", ";\n    border-radius: 8px;\n  }\n  &:active h3 {\n    color: ", ";      \n  }\n  &:active h3 > svg {\n    fill: ", ";\n  }\n\n  &:hover h3, &:active h3 {\n    text-decoration:underline;\n  }\n  /* .image {\n    max-width: 100%;\n    max-height: 100%;\n    transition: .1s all;\n  }\n  &:hover .image {\n    filter: brightness(75%);\n  } */\n  ", " {\n    height: calc(100% + .8rem);\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 25.6rem;\n  display:flex;\n  height:100%;\n  width:100%;\n  flex-direction:column;\n  background-color: #fff;\n  border-bottom-right-radius:.8rem;\n  border-bottom-left-radius:.8rem;\n  ", "{\n    flex-direction:row;\n    /* margin-top:-.8rem; */\n    margin-left:.8rem;\n    border-top-right-radius:.8rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var focusWrapper = (0, _core.css)(_templateObject(), _globalStyles.medium);
exports.focusWrapper = focusWrapper;
var linkWrapper = (0, _core.css)(_templateObject2(), _Colors.colors.theme1.light, _Colors.colors.theme1.mid, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark, _globalStyles.medium);
exports.linkWrapper = linkWrapper;
var focusHeadline = (0, _core.css)(_templateObject3(), _Colors.colors.theme1.mid);
exports.focusHeadline = focusHeadline;
var focusText = (0, _core.css)(_templateObject4(), _Colors.colors.theme3.dark);
exports.focusText = focusText;
var textArea = (0, _core.css)(_templateObject5(), _globalStyles.medium, _globalStyles.large);
exports.textArea = textArea;
var pictureWrapper = (0, _core.css)(_templateObject6(), _globalStyles.medium, _globalStyles.large);
exports.pictureWrapper = pictureWrapper;
var iconBackground = (0, _core.css)(_templateObject7(), _Colors.colors.theme2.mid, _globalStyles.medium);
exports.iconBackground = iconBackground;
var externalIcon = (0, _core.css)(_templateObject8(), _Colors.colors.theme1.mid);
exports.externalIcon = externalIcon;
var puffIcon = (0, _core.css)(_templateObject9());
exports.puffIcon = puffIcon;

//# sourceMappingURL=CampaignFocusPuff.css.js.map