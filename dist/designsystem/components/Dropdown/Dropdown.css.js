"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidStyle = exports.selectWrapperStyle = exports.labelStyle = exports.selectStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _Arrow = require("../Icons/SystemIcons/Arrow/Arrow");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    select {\n        border-color: #F00;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #4D4D4D;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin-bottom: .8rem;\n  display: block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    appearance: none;\n    width: 100%;\n    padding: 1.2rem 1.6rem;\n    box-sizing:border-box;\n    border: 2px solid ", ";\n    border-radius: 0.8rem;\n    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */\n    font-size: 1.8rem;\n    line-height: 3rem;\n    background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><path fill='", "' d='", "' /></svg>\");\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: 1.6em auto, 100%;\n    &[data-hasvalue=\"false\"]{\n        color: ", ";    \n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var selectStyle = (0, _core.css)(_templateObject(), _Colors.colors.theme3.midLight, encodeURIComponent(_Colors.colors.theme1.mid), _Arrow.arrowPath, _Colors.colors.theme3.dark);
exports.selectStyle = selectStyle;
var labelStyle = (0, _core.css)(_templateObject2());
exports.labelStyle = labelStyle;
var selectWrapperStyle = (0, _core.css)(_templateObject3());
exports.selectWrapperStyle = selectWrapperStyle;
var invalidStyle = (0, _core.css)(_templateObject4());
exports.invalidStyle = invalidStyle;

//# sourceMappingURL=Dropdown.css.js.map