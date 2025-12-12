"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heading = exports.exclamationMarkImage = exports.wrapper = void 0;

var _core = require("@emotion/core");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Colors = require("../Colors/Colors");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n\n  color: #000;\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n\n  position: absolute;\n\n\n  top: -2rem;\n\n\n  left: 50%;\n\n\n  width:4rem;\n\n\n  height:4rem;\n\n\n  transform: translate(-50%, 0);\n\n\n  ", " {\n\n\n    left: 1.2rem;\n\n\n    top:-.8rem; \n\n\n  }\n\n\n\n\n\n  [dir=\"rtl\"] &{\n\n\n    ", " {\n\n\n      left: auto;\n\n\n      right: -3.2rem; \n\n\n    }\n\n\n  }\n\n\n\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n  position: relative;\n\n\n  background-color: ", ";\n\n\n  border-radius: 0.7rem;\n\n\n  padding: 4rem 1.6rem 2.4rem 1.6rem;\n\n\n  margin-top: 2rem;\n\n\n  ", " {\n\n\n    padding: 2.4rem 3.2rem 2.4rem 3.2rem;\n\n\n    margin-top: .8rem;\n\n\n    margin-left: .8rem;\n\n\n  }\n\n\n  [dir=\"rtl\"] &{\n\n\n    ", " {\n\n\n      margin-left: .0rem;\n\n\n      margin-right: .8rem;\n\n\n    }\n\n\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = (0, _core.css)(_templateObject(), _Colors.colors.theme1.light, _globalStyles.medium, _globalStyles.medium);
exports.wrapper = wrapper;
var exclamationMarkImage = (0, _core.css)(_templateObject2(), _globalStyles.medium, _globalStyles.medium);
exports.exclamationMarkImage = exclamationMarkImage;
var heading = (0, _core.css)(_templateObject3());
exports.heading = heading;

//# sourceMappingURL=PrerequisitesBox.css.js.map