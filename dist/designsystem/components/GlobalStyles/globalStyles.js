"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.large = exports.medium = exports.small = exports.viewportLarge = exports.viewportMedium = exports.viewportSmall = exports.VisuallyHidden = exports.ElementLinkInvertedColorStyle = exports.ElementLinkColorStyle = exports.LinkWrapperInvertedColorStyle = exports.LinkWrapperColorStyle = exports.GlobalStyles = void 0;

var _core = require("@emotion/core");

var _Spacing = require("../Spacing/Spacing");

var _Colors = require("../Colors/Colors");

var _react = _interopRequireWildcard(require("react"));

var _FilePdf = require("../Icons/SystemIcons/FilePdf/FilePdf");

var _FileWord = require("../Icons/SystemIcons/FileWord/FileWord");

var _FilePowerpoint = require("../Icons/SystemIcons/FilePowerpoint/FilePowerpoint");

var _FileExcel = require("../Icons/SystemIcons/FileExcel/FileExcel");

var _File = require("../Icons/SystemIcons/File/File");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n color:", " !important;\n   &:hover {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n   }\n   &:active {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n     color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color:", " !important;\n   &:hover {\n    background-color:", " !important;\n   }\n   &:active {\n    background-color:", " !important;\n    color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html, body, \n  button, div, span, applet,\n  object, iframe, h1, h2, h3, h4,h5, h6,\n  p, blockquote, pre,a,abbr, acronym,address,\n  big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,\n  small,strike,strong,sub,sup,tt,b,u,i,center,dl,\n  dt,dd,ol,ul,li,fieldset,form,label,legend,table,\n  caption,tbody,tfoot,thead,tr,th,td,article,aside,\n  canvas,details,embed,figure,figcaption,footer,\n  header,hgroup,menu,nav,output,ruby,section,summary,\n  time,mark,audio,video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline;\n    }\n    html{\n      font-size: ", ";\n      font-family: ", "; \n      line-height: 16px;\n      color: #4D4D4D;\n      overflow-x:hidden;   \n    }\n\n    body {\n\n      font-size: 1.6rem;\n      margin:0;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;   \n      margin: 0;\n\n      &:not(.tabnav){\n        *:focus {\n          outline: none;\n        }\n      }\n      &.tabnav {\n        *:focus {\n          outline: 4px solid ", ";\n        }\n      }\n\n    }\n\n      \n    p {\n      padding-bottom: ", ";\n      font-size: 1.8rem;\n      line-height: 3.2rem;\n    }\n\n    ul {\n      list-style: bullet inside none;\n      padding-left: ", ";\n      li {\n        margin-bottom: ", ";\n      }\n      p {\n        display: inline;\n      }\n    }\n\n    h1, h2 {\n      margin-bottom: 1.6rem;\n    }\n    h3, h4, h5, h6 {\n      margin-bottom: .8rem;\n    }\n\n    i {\n      font-style: italic;\n    }\n    strong {\n      font-weight: 700;\n    }\n    u {\n      text-decoration: underline;\n    }\n\n    a {\n      &.external {\n        svg.external {\n          margin-left: 3px;\n        }\n      }\n\n      &:not(.noStyle){\n        text-decoration:underline;\n        font-weight:700;\n        color:", ";\n        svg {\n          fill: ", ";\n        }\n\n        &[href$=\".pdf\"],\n        &[href$=\".doc\"],\n        &[href$=\".docx\"],\n        &[href$=\".ppt\"],\n        &[href$=\".pptx\"],\n        &[href$=\".txt\"],\n        &[href$=\".xlt\"],\n        &[href$=\".xltx\"]{\n          margin-left: 3.2rem;\n          position: relative;\n          display: inline-flex;\n          align-items: center;\n          &:hover {\n            box-shadow: 0 0 0 2px ", ";\n          }\n          &:before{\n            content: '';\n            display:inline-block;\n            background-repeat: no-repeat;\n            background-size: 22px 30px;\n            background-position: 0px 0px;\n            width: 22px;\n            height: 30px;\n            position: absolute;\n            left: -3.2rem;\n            top: 50%;\n            transform: translateY(-50%);\n          }\n        }\n        \n        &[href$=\".pdf\"] { ", " }\n          \n        &[href$=\".ppt\"],\n        &[href$=\".pptx\"] { ", " }\n        \n        &[href$=\".doc\"],\n        &[href$=\".docx\"] { ", " }\n\n        &[href$=\".xlt\"],\n        &[href$=\".xltx\"] { ", " }\n\n        &[href$=\".txt\"] { ", " }\n\n        &:hover {\n          box-shadow: 0 0 0 4px ", ";\n          border-radius: .4rem;\n          background-color:", ";\n          text-decoration:none;\n          svg {\n            fill: ", ";\n          }\n        }\n        &:visited{\n          color:", ";\n          svg {\n            fill: ", ";\n          }\n        }\n        \n        &:active{\n          box-shadow: 0 0 0 4px ", ";\n          border-radius: .4rem;\n          background-color:", ";\n          color:", ";\n          text-decoration:none;\n          svg {\n            fill: ", ";\n          }\n        }\n      \n        &.invertedStyle:not(.noStyle){\n          &:visited{\n            background-color:inherit;\n          }\n          &:hover {\n            background-color:#fff;\n            box-shadow: 0 0 0 4px #fff;\n          }\n          &:active {\n            box-shadow: 0 0 0 4px #fff;\n            background-color:#fff;\n          }\n        }\n      }\n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = function GlobalStyles(_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? "62.5%" : _ref$fontSize,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" : _ref$fontFamily;
  (0, _react.useEffect)(function () {
    document.addEventListener('keyup', function (e) {
      if (e.key === "Tab" && !document.body.classList.contains("tabnav")) {
        document.body.classList.add("tabnav");
      }
    });
    document.addEventListener('click', function (e) {
      // if detail is 0 it's most likely a keypress and not a mouse click
      if (e.detail !== 0 && document.body.classList.contains("tabnav")) {
        document.body.classList.remove("tabnav");
      }
    });
    return function () {};
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_core.Global, {
    styles: globalStyles(fontSize, fontFamily)
  });
};

exports.GlobalStyles = GlobalStyles;

var fileIcon = function fileIcon(fileSvgPath) {
  return "\n  &:before{\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 30' %3E%3Cpath fill='".concat(encodeURIComponent(_Colors.colors.theme1.mid), "' d='").concat(fileSvgPath, "'/%3E%3C/svg%3E\");\n  }\n");
};

var globalStyles = function globalStyles() {
  var fontSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "62.5%";
  var fontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
  return (0, _core.css)(_templateObject(), fontSize, fontFamily, _Colors.colors.states.focus, _Spacing.spacing.s, _Spacing.spacing.xl, _Spacing.spacing.s, _Colors.colors.theme1.mid, _Colors.colors.theme1.mid, _Colors.colors.theme1.midLight, fileIcon(_FilePdf.filePdfPath), fileIcon(_FilePowerpoint.filePowerpointPath), fileIcon(_FileWord.fileWordPath), fileIcon(_FileExcel.fileExcelPath), fileIcon(_File.filePath), _Colors.colors.theme1.midLight, _Colors.colors.theme1.midLight, _Colors.colors.theme1.mid, _Colors.colors.states.visited, _Colors.colors.states.visited, _Colors.colors.theme1.midLight, _Colors.colors.theme1.midLight, _Colors.colors.theme1.xDark, _Colors.colors.theme1.xDark);
};

var LinkColors = (0, _core.css)(_templateObject2(), _Colors.colors.theme1.mid, _Colors.colors.theme1.midLight, _Colors.colors.theme1.midLight, _Colors.colors.theme1.xDark, _Colors.colors.states.visited);
var LinkColorsInverted = (0, _core.css)(_templateObject3(), _Colors.colors.theme1.mid, _Colors.colors.theme1.xDark, _Colors.colors.states.visited);
var LinkWrapperColorStyle = (0, _core.css)(_templateObject4(), LinkColors);
exports.LinkWrapperColorStyle = LinkWrapperColorStyle;
var LinkWrapperInvertedColorStyle = (0, _core.css)(_templateObject5(), LinkColorsInverted);
exports.LinkWrapperInvertedColorStyle = LinkWrapperInvertedColorStyle;
var ElementLinkColorStyle = (0, _core.css)(_templateObject6(), LinkColors);
exports.ElementLinkColorStyle = ElementLinkColorStyle;
var ElementLinkInvertedColorStyle = (0, _core.css)(_templateObject7(), LinkColorsInverted);
exports.ElementLinkInvertedColorStyle = ElementLinkInvertedColorStyle;
var VisuallyHidden = (0, _core.css)(_templateObject8());
exports.VisuallyHidden = VisuallyHidden;
var viewportSmall = 420;
exports.viewportSmall = viewportSmall;
var viewportMedium = 768;
exports.viewportMedium = viewportMedium;
var viewportLarge = 1120;
exports.viewportLarge = viewportLarge;

var mediaQueryMaxWidth = function mediaQueryMaxWidth(width) {
  return "@media (max-width: ".concat(width, "px)");
};

var mediaQueryMinWidth = function mediaQueryMinWidth(width) {
  return "@media (min-width: ".concat(width, "px)");
};

var small = mediaQueryMaxWidth(viewportSmall);
exports.small = small;
var medium = mediaQueryMinWidth(viewportMedium);
exports.medium = medium;
var large = mediaQueryMinWidth(viewportLarge);
exports.large = large;

//# sourceMappingURL=globalStyles.js.map