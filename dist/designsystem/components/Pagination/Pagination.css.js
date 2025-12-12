"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentPageStyle = exports.distanceIndicatorStyle = exports.prevPageStyleHidden = exports.nextPageStyle = exports.prevPageStyle = exports.pageStyle = exports.paginationWrapperStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Spacing = require("../Spacing/Spacing");

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\n    background-color:", ";\n    border: 1px solid ", ";\n    color: #fff!important;\n\n    &:hover{\n        color: ", "!important;\n        border: 1px solid ", ";\n    }\n\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.6rem;\n    color: ", ";\n    font-weight: 500;\n    ", "{\n        font-size: 2.1rem;\n    }\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    visibility: hidden;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-left: auto;\n    font-size: 1.8rem;\n    position: absolute;\n    right: 0px;\n    bottom: -0rem;\n\n    ", "{\n        position: static;\n    }\n    &:visited{\n        color: ", "!important;\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-right: auto;\n    font-size: 1.8rem;\n    position: absolute;\n    left: 0px;\n    bottom: -0rem;\n\n    ", "{\n        position: static;\n    }\n    &:visited{\n        color: ", "!important;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: 4.0rem;\n    width: 4.2rem;\n\n    line-height: 4.0rem;\n    border: 1px solid ", ";\n    border-radius: 8px;\n    display: inline-block;\n    font-size: 2.1rem;\n    text-align:center;\n    text-decoration: none !important;\n    margin: 0 0.8rem;\n\n    &.last{\n        margin-right: 0;\n    }\n\n    &.first{\n        margin-left: 0;\n    }\n\n    ", "{\n        margin: 0 1.2rem;\n        height: 5.6rem;\n        line-height: 5.6rem;\n        width: 6.0rem;\n    }\n\n    &:hover {\n        box-shadow: none !important;\n        border-radius: ", " !important;\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding-bottom: 5.6rem;\n\n    ", "{\n        justify-content: space-between;\n        padding-bottom: 4.8rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var paginationWrapperStyle = (0, _core.css)(_templateObject(), _globalStyles.large);
exports.paginationWrapperStyle = paginationWrapperStyle;
var pageStyle = (0, _core.css)(_templateObject2(), _Colors.colors.theme1.mid, _globalStyles.medium, _Spacing.spacing.xs);
exports.pageStyle = pageStyle;
var prevPageStyle = (0, _core.css)(_templateObject3(), _globalStyles.medium, _Colors.colors.theme1.mid);
exports.prevPageStyle = prevPageStyle;
var nextPageStyle = (0, _core.css)(_templateObject4(), _globalStyles.medium, _Colors.colors.theme1.mid);
exports.nextPageStyle = nextPageStyle;
var prevPageStyleHidden = (0, _core.css)(_templateObject5());
exports.prevPageStyleHidden = prevPageStyleHidden;
var distanceIndicatorStyle = (0, _core.css)(_templateObject6(), _Colors.colors.theme1.mid, _globalStyles.medium);
exports.distanceIndicatorStyle = distanceIndicatorStyle;
var currentPageStyle = (0, _core.css)(_templateObject7(), _Colors.colors.theme1.dark, _Colors.colors.theme1.dark, _Colors.colors.theme1.mid, _Colors.colors.theme1.mid);
exports.currentPageStyle = currentPageStyle;

//# sourceMappingURL=Pagination.css.js.map