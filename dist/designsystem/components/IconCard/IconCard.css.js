"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topAreaIcon = exports.noIcon = exports.iconText = exports.iconCardStyle = exports.iconStyle = exports.arrowStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors.js");

var _Spacing = require("../Spacing/Spacing.js");

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 5.6rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: .8rem 1.6rem .8rem 1.4rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    color: ", ";\n    line-height: 2.4rem;\n    font-size: 2.1rem;\n    font-weight: 500;\n    word-wrap:break-word;\n\n    [dir='rtl'] &{\n        padding-right: ", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";    \n    min-height: 7.2rem;\n    text-decoration: none;\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    height:100%;\n    align-items: center;\n    border-radius: .8rem;\n    border: 1px solid ", ";\n    &:hover {\n        background-color: ", ";\n        border-color: ", ";\n        box-shadow: inset 0 0 0 1px ", ";\n        span {\n            text-decoration:underline;\n        }\n    }\n    &:active \n    {   \n        background-color: ", ";\n        border-color:", ";\n        box-shadow: none;\n        span{\n            color:#fff;\n        }\n        svg {\n            fill:#fff;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    padding: 0 1.6rem 0 1.2rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    transform: rotate(270deg);\n    padding-right: .4rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: ", ";\n\n    [dir='rtl'] &{\n        left: .5rem;\n        right: auto;\n        transform: rotate(90deg);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var arrowStyle = (0, _core.css)(_templateObject(), _Colors.colors.theme1.mid);
exports.arrowStyle = arrowStyle;
var iconStyle = (0, _core.css)(_templateObject2(), _Colors.colors.theme1.mid);
exports.iconStyle = iconStyle;
var iconCardStyle = (0, _core.css)(_templateObject3(), _Colors.colors.common.white, _Colors.colors.theme1.mid, _Colors.colors.theme1.midLight, _Colors.colors.theme1.mid, _Colors.colors.theme1.mid, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark);
exports.iconCardStyle = iconCardStyle;
var iconText = (0, _core.css)(_templateObject4(), _Colors.colors.theme1.mid, _Spacing.spacing.s);
exports.iconText = iconText;
var noIcon = (0, _core.css)(_templateObject5());
exports.noIcon = noIcon;
var topAreaIcon = (0, _core.css)(_templateObject6());
exports.topAreaIcon = topAreaIcon;

//# sourceMappingURL=IconCard.css.js.map