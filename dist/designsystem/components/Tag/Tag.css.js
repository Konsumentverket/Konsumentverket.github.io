"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    border-radius:1.6rem;\n    color: ", ";\n    padding: .4rem 1.6rem;\n    display: table;\n    min-height: 3rem;\n    text-decoration: none;\n    font-size:1.6rem;\n    font-weight: 500;\n    line-height:2.4rem;\n    display:inline-block;\n    vertical-align:middle;\n    box-sizing:border-box;\n\n    &:hover {\n        background-color: ", ";\n        box-shadow:inset 0px 0px 0px 1px ", ";\n        text-decoration:underline;\n    }\n    &:active {\n        color:#fff;\n        background-color: ", ";\n        box-shadow:none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tagStyle = (0, _core.css)(_templateObject(), _Colors.colors.theme1.mid, _Colors.colors.theme1.mid, _Colors.colors.theme1.midLight, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark);
exports.tagStyle = tagStyle;

//# sourceMappingURL=Tag.css.js.map