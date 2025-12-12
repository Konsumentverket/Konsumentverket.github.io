"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondaryArrowStyleCSS = exports.arrowStyle = exports.iconStyle = exports.tagItemText = exports.tagItem = exports.tagsListItem = exports.tagsList = exports.tagsArea = exports.tagIconHeading = exports.tagHeading = exports.tagLink = exports.invertedTag = exports.tagBlockItem = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 2rem;\n    right: 1.2rem;\n    vertical-align: middle;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: #fff;\n\n    [dir='rtl'] &{\n        left: .5rem;\n        right: auto;\n        transform: rotate(90deg);\n    }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 2rem;\n    right: .5rem;\n    vertical-align: middle;\n    transform: rotate(270deg);\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: #fff;\n\n    [dir='rtl'] &{\n        left: .5rem;\n        right: auto;\n        transform: rotate(90deg);\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    top: calc((100% - 32px) / 2);\n    left: 1.6rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: #fff;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-size:1.4rem;\n    line-height:2.4rem;\n    padding: 0 0 .8rem 0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin:0 1.6rem .8rem 0;\n    list-style-type:none;\n    &:before{\n        content:none !important;\n    }\n    &:last-child{\n        margin-right:0;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin:0;\n    padding:0;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    flex-flow: wrap;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n     position: relative;\n    min-height:6.9rem;\n    box-sizing:border-box;\n    overflow: auto;\n    padding: .8rem 1.6rem 0 1.6rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["     \n        padding: .8rem 4rem .8rem 6.4rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        width:100%;\n        height:100%;\n        padding: .8rem 4rem .8rem 1.6rem;\n        display: flex;\n        flex-direction:column;\n        box-sizing:border-box;\n        justify-content:center;\n        margin:0;\n        color: #fff;\n        line-height: 2.4rem;\n        font-size: 2.1rem;\n        font-weight: 500;\n        word-wrap:break-word;\n\n        [dir='rtl'] &{\n            padding: .8rem 1.6rem .8rem 4rem;\n        }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";    \n    min-height: 7.2rem;\n    text-decoration: none;\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    justify-content:center;\n    flex-direction:column;\n    border-top-left-radius:.8rem;\n        border-top-right-radius:.8rem;\n\n    &:hover {\n        background-color: ", ";\n           .tagHeading{\n                text-decoration:underline;\n            }\n    }\n    &:active \n    {   \n        background-color: ", ";\n        border-color:", ";\n        span{\n            color:#fff;\n        }\n        svg {\n            fill:#fff;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color:#fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color:", ";    \n    display:flex;\n    flex-direction:column;\n    height:100%;\n    min-height:16rem;\n    border-radius:.8rem;\n    \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tagBlockItem = (0, _core.css)(_templateObject(), _Colors.colors.theme3.xLight);
exports.tagBlockItem = tagBlockItem;
var invertedTag = (0, _core.css)(_templateObject2());
exports.invertedTag = invertedTag;
var tagLink = (0, _core.css)(_templateObject3(), _Colors.colors.theme1.mid, _Colors.colors.theme1.midDark, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark);
exports.tagLink = tagLink;
var tagHeading = (0, _core.css)(_templateObject4());
exports.tagHeading = tagHeading;
var tagIconHeading = (0, _core.css)(_templateObject5());
exports.tagIconHeading = tagIconHeading;
var tagsArea = (0, _core.css)(_templateObject6());
exports.tagsArea = tagsArea;
var tagsList = (0, _core.css)(_templateObject7());
exports.tagsList = tagsList;
var tagsListItem = (0, _core.css)(_templateObject8());
exports.tagsListItem = tagsListItem;
var tagItem = (0, _core.css)(_templateObject9());
exports.tagItem = tagItem;
var tagItemText = (0, _core.css)(_templateObject10());
exports.tagItemText = tagItemText;
var iconStyle = (0, _core.css)(_templateObject11());
exports.iconStyle = iconStyle;
var arrowStyle = (0, _core.css)(_templateObject12());
exports.arrowStyle = arrowStyle;
var secondaryArrowStyleCSS = (0, _core.css)(_templateObject13());
exports.secondaryArrowStyleCSS = secondaryArrowStyleCSS;

//# sourceMappingURL=TagBlock.css.js.map