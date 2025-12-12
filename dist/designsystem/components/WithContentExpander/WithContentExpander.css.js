"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseLinkStyle = exports.collapseButtonStyle = exports.IconFullWidth = exports.IconExpandedStyle = exports.IconStyle = exports.ComponentWrapperStyle = exports.grayFocusedOnExpansionWrapper = exports.grayContentExpanderWrapper = void 0;

var _core = require("@emotion/core");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Colors = require("../Colors/Colors");

var _Spacing = require("../Spacing/Spacing");

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ", ";\n  }\n  &:hover {\n    text-decoration: underline !important;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  position: relative;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 0.8rem 4rem 0.8rem 1.6rem;\n  border: solid 1px ", ";\n  color: ", ";\n  border-radius: 3.2rem;\n  transition: visibility 0.1s, opacity 0.1s ease-in-out;\n  font-weight: 700;\n  margin-bottom: 1.6rem;\n  margin-left:auto;\n  align-self: center;\n\n  cursor: pointer;\n\n  .expanded > & {\n    visibility: visible;\n    display:block;\n    opacity: 1;\n  }\n\n  &:hover {\n    text-decoration: underline;\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:active {\n    text-decoration: underline;\n    color: #fff;\n    background-color: ", ";\n    border-color: ", ";\n    svg {\n      fill: #fff;\n    }\n  }\n\n  > svg {\n    transform: rotate(180deg);\n    height: 1.6rem;\n    fill: ", ";\n    height: 1.6rem;\n    position: absolute;\n    width: 1.6rem;\n    top: 1.2rem;\n    right: 1.6rem;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-left:auto!important;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(180deg);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    transition: transform .2s ease-out;\n    width: ", ";\n    height: ", ";\n    margin-left: .5rem;\n    display:flex;\n    ", " {\n        margin-left: 1rem;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n  &.full-width > .link-element a {\n    display: block;\n  }\n\n  > .link-element a {\n\n    .link-element-container {\n\n        h1, h2, h3, h4 {\n            white-space: pre-line;\n            margin-bottom: 0;\n        }\n\n        display: flex;\n        align-items: center;\n\n    }\n\n    font-weight: 600;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    position: relative;\n    ", " {\n      width: 100%;\n    }\n\n    svg {\n      font-size: inherit;\n      vertical-align: middle;\n      fill: ", ";\n      flex-shrink: 0;\n    }\n  }\n\n  .expand-section {\n    max-height: 0;\n    overflow: hidden;\n    height: auto;\n    transition: all 0.3s ease-in-out;\n    display: flex;\n    flex-direction: column;\n\n    &.expanded {\n      max-height: 100%;\n      overflow: visible;\n      -ms-overflow-style: none;\n      overflow: -moz-scrollbars-none;\n      &::-webkit-scrollbar{\n        display:none;\n      }\n    }\n    &:not(.expanded) {\n      visibility: hidden;\n      display: none;\n\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n  > .expanded > .link-element {\n    background-color: ", ";\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    &:hover {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  > div > .link-element {\n    border-radius: ", ";\n    background-color: ", ";\n    margin-bottom: 0rem!important;\n    border: 2px solid transparent;\n    &:hover {\n      border: .2rem solid ", ";\n      border-radius: ", ";\n      background-color: ", ";\n    }\n    a{\n        margin: 0 1px 1px 1px;\n        padding: ", " ", ";\n        ", " {\n          padding: ", " ", ";\n        }\n        box-sizing: border-box;\n        &:hover {\n            text-decoration: underline;\n            cursor: pointer;\n        }\n        &[aria-expanded=\"true\"] {\n            h2,h3,h4{\n                text-decoration: underline!important;\n            }\n        }\n    }\n  }\n  > div > .expand-section {\n      background-color: ", ";\n      border: 2px solid transparent;\n      padding: ", " ", " ", " ", ";\n      ", " {\n        padding: ", " ", " ", " ", ";\n      }\n      position: fixed;\n  }\n  > div > .expand-section.expanded {\n    border: 2px solid ", ";\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    border-top: none;\n    position: relative;\n    > div {\n      margin-top: 0;\n    }\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 0.5rem;\n\n    :focus-within {\n      .tabnav &{\n          outline: .2rem solid ", ";\n          outline-offset: .2rem;\n      }\n    }\n\n    > .withContentExpander {\n      .full-width {\n          border: 2px solid transparent;\n          &.expanded,:hover{\n              border: .2rem solid ", ";\n          }\n      }\n\n      > .link-element { \n          margin-bottom: 0rem!important;\n          a{\n              padding: 2.4rem;\n              box-sizing: border-box;\n              &:hover {\n                  text-decoration: underline;\n                  background-color: inherit;\n                  cursor: pointer;\n              }\n              &[aria-expanded=\"true\"] {\n                  h2,h3,h4{\n                      text-decoration: underline!important;\n                  }\n              }\n          }\n      }\n      > .expand-section{\n          padding: 0 2.4rem;\n      }\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var grayContentExpanderWrapper = (0, _core.css)(_templateObject(), _Colors.colors.theme3.xLight, _Colors.colors.states.focus, _Colors.colors.theme1.mid);
exports.grayContentExpanderWrapper = grayContentExpanderWrapper;
var grayFocusedOnExpansionWrapper = (0, _core.css)(_templateObject2(), _Colors.colors.theme3.light, _Spacing.spacing.xs, _Colors.colors.theme3.xLight, _Colors.colors.theme1.mid, _Spacing.spacing.xs, _Colors.colors.theme1.light, _Spacing.spacing.s, _Spacing.spacing.xs, _globalStyles.medium, _Spacing.spacing.s, _Spacing.spacing.m, _Colors.colors.common.white, _Spacing.spacing.s, _Spacing.spacing.xs, _Spacing.spacing.m, _Spacing.spacing.xs, _globalStyles.medium, _Spacing.spacing.s, _Spacing.spacing.m, _Spacing.spacing.m, _Spacing.spacing.m, _Colors.colors.theme3.light, _Spacing.spacing.xs, _Spacing.spacing.xs);
exports.grayFocusedOnExpansionWrapper = grayFocusedOnExpansionWrapper;
var ComponentWrapperStyle = (0, _core.css)(_templateObject3(), _globalStyles.small, _Colors.colors.theme1.mid);
exports.ComponentWrapperStyle = ComponentWrapperStyle;

var IconStyle = function IconStyle(fontSize) {
  return (0, _core.css)(_templateObject4(), fontSize, fontSize, _globalStyles.medium);
};

exports.IconStyle = IconStyle;
var IconExpandedStyle = (0, _core.css)(_templateObject5());
exports.IconExpandedStyle = IconExpandedStyle;
var IconFullWidth = (0, _core.css)(_templateObject6());
exports.IconFullWidth = IconFullWidth;
var collapseButtonStyle = (0, _core.css)(_templateObject7(), _Spacing.spacing.xs, _Colors.colors.theme1.mid, _Colors.colors.theme1.mid, _Colors.colors.theme1.midLight, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark, _Colors.colors.theme1.mid);
exports.collapseButtonStyle = collapseButtonStyle;
var baseLinkStyle = (0, _core.css)(_templateObject8(), _Colors.colors.theme1.mid, _Colors.colors.theme1.mid);
exports.baseLinkStyle = baseLinkStyle;

//# sourceMappingURL=WithContentExpander.css.js.map