import { jsx, Global, css } from '@emotion/core';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { format, parseISO } from 'date-fns';
import sv from 'date-fns/locale/sv';
import css$1 from '@emotion/css';
import ReactDOM from 'react-dom';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var spacing = {
  'xs': '.8rem',
  's': '1.6rem',
  'm': '2.4rem',
  'l': '3.2rem',
  'xl': '4.8rem',
  'xxl': '8.8rem'
};

var defaultTheme = {
  theme1: {
    "xDark": "#162259",
    "dark": "#00345c",
    "midDark": "#00518f",
    "mid": "#0061c2",
    "midLight": "#ddf1fd",
    "light": "#ebf6fd",
    "xLight": "#ebf6fd"
  },
  theme2: {
    "xDark": "#8C002D",
    "dark": "#8C002D",
    "midDark": "#A10042",
    "mid": "#B50156",
    "midLight": "#B50156",
    "light": "#F6E1EB",
    "xLight": "#F6E1EB"
  },
  theme3: {
    "xDark": "#161616",
    "dark": "#4D4D4D",
    "midDark": "#6B6B6B",
    "mid": "#6B6B6B",
    "midLight": "#D0D0D0",
    "light": "#E5E3E3",
    "xLight": "#F2F0F0"
  },
  states: {
    "visited": "#800080",
    "visitedInverted": "#FFC7C2",
    "focus": "#00944B"
  },
  common: {
    "white": "#ffffff",
    "black": "#000000",
    "warning": "#E7342B",
    "success": "#007A3E",
    "cyan": "#92DCFA"
  }
};
defaultTheme.buttons = {
  primary: {
    backgroundColor: defaultTheme.theme1.mid,
    hover: defaultTheme.theme1.midDark,
    active: defaultTheme.theme1.xDark
  },
  secondary: {
    textColor: defaultTheme.theme1.mid,
    borderColor: defaultTheme.theme1.mid,
    hover: defaultTheme.theme1.midLight,
    active: defaultTheme.theme1.xDark
  }
};
var eccTheme = {
  theme1: {
    "xDark": "#162259",
    "dark": "#314575",
    "midDark": "#314575",
    "mid": "#004a93",
    "midLight": "#E7F6FB",
    "light": "#D7E6ED"
  },
  theme2: {
    "xLight": "#F1F1F1",
    "midLight": "#eaeae9",
    "light": "#e7f0f4"
  },
  theme3: {
    "xLight": "#F2F0F0",
    "light": "#D0D0D0",
    "mid": "#6B6B6B",
    "dark": "#4D4D4D",
    "xDark": "#161616"
  },
  buttons: {
    primary: {
      backgroundColor: '#008054',
      hover: '#004D32',
      active: '#001A11'
    },
    secondary: {
      textColor: '#008054',
      borderColor: '#008054',
      hover: '#E5F2ED',
      active: '#001A11'
    }
  },
  states: {
    focus: '#F59C00'
  }
};
var colors = process.env.THEME === 'ecc' ? Object.assign({}, defaultTheme, eccTheme) : defaultTheme;

var filePdfPath = "M11.36875,16.00625 C11.05625,15.00625 11.0625,13.075 11.24375,13.075 C11.76875,13.075 11.71875,15.38125 11.36875,16.00625 Z M11.2625,18.95625 C10.78125,20.21875 10.18125,21.6625 9.4875,22.875 C10.63125,22.4375 11.925,21.8 13.41875,21.50625 C12.625,20.90625 11.8625,20.04375 11.2625,18.95625 Z M5.38125,26.75625 C5.38125,26.80625 6.20625,26.41875 7.5625,24.24375 C7.14375,24.6375 5.74375,25.775 5.38125,26.75625 Z M15.5,10 L24,10 L24,30.5 C24,31.33125 23.33125,32 22.5,32 L1.5,32 C0.66875,32 0,31.33125 0,30.5 L0,1.5 C0,0.66875 0.66875,0 1.5,0 L14,0 L14,8.5 C14,9.325 14.675,10 15.5,10 Z M15,20.7375 C13.75,19.975 12.91875,18.925 12.33125,17.375 C12.6125,16.21875 13.05625,14.4625 12.71875,13.3625 C12.425,11.525 10.06875,11.70625 9.73125,12.9375 C9.41875,14.08125 9.70625,15.69375 10.2375,17.75 C9.5125,19.475 8.44375,21.7875 7.6875,23.1125 C7.68125,23.1125 7.68125,23.11875 7.675,23.11875 C5.98125,23.9875 3.075,25.9 4.26875,27.36875 C4.61875,27.8 5.26875,27.99375 5.6125,27.99375 C6.73125,27.99375 7.84375,26.86875 9.43125,24.13125 C11.04375,23.6 12.8125,22.9375 14.36875,22.68125 C15.725,23.41875 17.3125,23.9 18.36875,23.9 C20.19375,23.9 20.31875,21.9 19.6,21.1875 C18.73125,20.3375 16.20625,20.58125 15,20.7375 L15,20.7375 Z M23.5625,6.5625 L17.4375,0.4375 C17.15625,0.15625 16.775,0 16.375,0 L16,0 L16,8 L24,8 L24,7.61875 C24,7.225 23.84375,6.84375 23.5625,6.5625 Z M18.93125,22.51875 C19.1875,22.35 18.775,21.775 16.25625,21.95625 C18.575,22.94375 18.93125,22.51875 18.93125,22.51875 Z";
var FilePdf = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "32px",
    viewBox: "0 0 24 32"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: filePdfPath
  }));
});

var fileWordPath = "M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.56875,16 L19.0625,16 C19.54375,16 19.9,16.44375 19.79375,16.91875 L17.41875,27.41875 C17.34375,27.7625 17.0375,28 16.6875,28 L14.3125,28 C13.96875,28 13.66875,27.7625 13.5875,27.43125 C11.975,20.9625 12.2875,22.35625 11.9875,20.525 L11.95625,20.525 C11.8875,21.41875 11.80625,21.6125 10.35625,27.43125 C10.275,27.7625 9.975,28 9.63125,28 L7.3125,28 C6.9625,28 6.65625,27.75625 6.58125,27.4125 L4.21875,16.9125 C4.1125,16.44375 4.46875,16 4.95,16 L6.48125,16 C6.8375,16 7.15,16.25 7.21875,16.60625 C8.19375,21.48125 8.475,23.45 8.53125,24.24375 C8.63125,23.60625 8.9875,22.2 10.36875,16.575 C10.45,16.2375 10.75,16.00625 11.1,16.00625 L12.91875,16.00625 C13.26875,16.00625 13.56875,16.24375 13.65,16.58125 C15.15,22.85625 15.45,24.33125 15.5,24.66875 C15.4875,23.96875 15.3375,23.55625 16.85,16.59375 C16.9125,16.24375 17.21875,16 17.56875,16 L17.56875,16 Z M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 Z";
var FileWord = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "32px",
    viewBox: "0 0 24 32"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: fileWordPath
  }));
});

var filePowerpointPath = "M12.10625,16.95 C12.65625,16.95 13.075,17.11875 13.375,17.45625 C13.975,18.1375 13.9875,19.5 13.3625,20.2125 C13.05625,20.5625 12.61875,20.74375 12.04375,20.74375 L10.3625,20.74375 L10.3625,16.95 L12.10625,16.95 L12.10625,16.95 Z M23.5625,6.5625 L17.4375,0.4375 C17.15625,0.15625 16.775,0 16.375,0 L16,0 L16,8 L24,8 L24,7.61875 C24,7.225 23.84375,6.84375 23.5625,6.5625 Z M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.3125,18.825 C17.3125,24.46875 11.7625,23.675 10.36875,23.675 L10.36875,27.25 C10.36875,27.6625 10.03125,28 9.61875,28 L7.69375,28 C7.28125,28 6.94375,27.6625 6.94375,27.25 L6.94375,14.7625 C6.94375,14.35 7.28125,14.0125 7.69375,14.0125 L12.75625,14.0125 C15.5375,14.0125 17.3125,16.0625 17.3125,18.825 Z";
var FilePowerpoint = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "32px",
    viewBox: "0 0 24 32"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: filePowerpointPath
  }));
});

var fileExcelPath = "M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.75625,15.15625 L14,21 L17.75625,26.84375 C18.075,27.34375 17.71875,28 17.125,28 L14.94375,28 C14.66875,28 14.4125,27.85 14.28125,27.60625 C13.05625,25.34375 12,23.3125 12,23.3125 C11.6,24.2375 11.375,24.5625 9.7125,27.6125 C9.58125,27.85625 9.33125,28.00625 9.05625,28.00625 L6.875,28.00625 C6.28125,28.00625 5.925,27.35 6.24375,26.85 L10.0125,21.00625 L6.24375,15.1625 C5.91875,14.6625 6.28125,14.0062057 6.875,14.0062057 L9.05,14.0062057 C9.325,14.0062057 9.58125,14.15625 9.7125,14.4 C11.34375,17.45 10.9625,16.5 12,18.68125 C12,18.68125 12.38125,17.95 14.2875,14.4 C14.41875,14.15625 14.675,14.0062057 14.95,14.0062057 L17.125,14.0062057 C17.71875,14 18.075,14.65625 17.75625,15.15625 Z M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 Z";
var FileExcel = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "32px",
    viewBox: "0 0 24 32"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: fileExcelPath
  }));
});

var filePath = "M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 L24,7.61875 Z M18,14.75 L18,15.25 C18,15.6625 17.6625,16 17.25,16 L6.75,16 C6.3375,16 6,15.6625 6,15.25 L6,14.75 C6,14.3375 6.3375,14 6.75,14 L17.25,14 C17.6625,14 18,14.3375 18,14.75 L18,14.75 Z M18,19.25 C18,19.6625 17.6625,20 17.25,20 L6.75,20 C6.3375,20 6,19.6625 6,19.25 L6,18.75 C6,18.3375 6.3375,18 6.75,18 L17.25,18 C17.6625,18 18,18.3375 18,18.75 L18,19.25 Z M18,23.25 C18,23.6625 17.6625,24 17.25,24 L6.75,24 C6.3375,24 6,23.6625 6,23.25 L6,22.75 C6,22.3375 6.3375,22 6.75,22 L17.25,22 C17.6625,22 18,22.3375 18,22.75 L18,23.25 Z M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 L14,8.5 Z";
var File = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "32px",
    viewBox: "0 0 24 32"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: filePath
  }));
});

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
  var data = _taggedTemplateLiteral(["\n  html, body, \n  button, div, span, applet,\n  object, iframe, h1, h2, h3, h4,h5, h6,\n  p, blockquote, pre,a,abbr, acronym,address,\n  big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,\n  small,strike,strong,sub,sup,tt,b,u,i,center,dl,\n  dt,dd,ol,ul,li,fieldset,form,label,legend,table,\n  caption,tbody,tfoot,thead,tr,th,td,article,aside,\n  canvas,details,embed,figure,figcaption,footer,\n  header,hgroup,menu,nav,output,ruby,section,summary,\n  time,mark,audio,video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline;\n    }\n    html{\n      font-size: ", ";\n      font-family: ", "; \n      line-height: 16px;\n      color: #4D4D4D;\n      overflow-x:hidden;   \n    }\n\n    body {\n\n      font-size: 1.6rem;\n      margin:0;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;   \n      margin: 0;\n\n      &:not(.tabnav){\n        *:focus {\n          outline: none;\n        }\n      }\n      &.tabnav {\n        *:focus {\n          outline: 4px solid ", ";\n        }\n      }\n\n    }\n\n      \n    p {\n      padding-bottom: ", ";\n      font-size: 1.8rem;\n      line-height: 3.2rem;\n    }\n\n    ul {\n      list-style: bullet inside none;\n      padding-left: ", ";\n      li {\n        margin-bottom: ", ";\n      }\n      p {\n        display: inline;\n      }\n    }\n\n    h1, h2 {\n      margin-bottom: 1.6rem;\n    }\n    h3, h4, h5, h6 {\n      margin-bottom: .8rem;\n    }\n\n    i {\n      font-style: italic;\n    }\n    strong {\n      font-weight: 700;\n    }\n    u {\n      text-decoration: underline;\n    }\n\n    a {\n      &.external {\n        svg.external {\n          margin-left: 3px;\n        }\n      }\n\n      &:not(.noStyle){\n        text-decoration:underline;\n        font-weight:700;\n        color:", ";\n        svg {\n          fill: ", ";\n        }\n\n        &[href$=\".pdf\"],\n        &[href$=\".doc\"],\n        &[href$=\".docx\"],\n        &[href$=\".ppt\"],\n        &[href$=\".pptx\"],\n        &[href$=\".txt\"],\n        &[href$=\".xlt\"],\n        &[href$=\".xltx\"]{\n          margin-left: 3.2rem;\n          position: relative;\n          display: inline-flex;\n          align-items: center;\n          &:hover {\n            box-shadow: 0 0 0 2px ", ";\n          }\n          &:before{\n            content: '';\n            display:inline-block;\n            background-repeat: no-repeat;\n            background-size: 22px 30px;\n            background-position: 0px 0px;\n            width: 22px;\n            height: 30px;\n            position: absolute;\n            left: -3.2rem;\n            top: 50%;\n            transform: translateY(-50%);\n          }\n        }\n        \n        &[href$=\".pdf\"] { ", " }\n          \n        &[href$=\".ppt\"],\n        &[href$=\".pptx\"] { ", " }\n        \n        &[href$=\".doc\"],\n        &[href$=\".docx\"] { ", " }\n\n        &[href$=\".xlt\"],\n        &[href$=\".xltx\"] { ", " }\n\n        &[href$=\".txt\"] { ", " }\n\n        &:hover {\n          box-shadow: 0 0 0 4px ", ";\n          border-radius: .8rem;\n          background-color:", ";\n          text-decoration:none;\n          svg {\n            fill: ", ";\n          }\n        }\n        &:visited{\n          color:", ";\n          svg {\n            fill: ", ";\n          }\n        }\n        \n        &:active{\n          box-shadow: 0 0 0 4px ", ";\n          border-radius: .8rem;\n          background-color:", ";\n          color:", ";\n          text-decoration:none;\n          svg {\n            fill: ", ";\n          }\n        }\n      \n        &.invertedStyle:not(.noStyle){\n          &:visited{\n            background-color:inherit;\n          }\n          &:hover {\n            background-color:#fff;\n            box-shadow: 0 0 0 4px #fff;\n          }\n          &:active {\n            box-shadow: 0 0 0 4px #fff;\n            background-color:#fff;\n          }\n        }\n      }\n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = function GlobalStyles(_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? "62.5%" : _ref$fontSize,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" : _ref$fontFamily;
  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(Global, {
    styles: globalStyles(fontSize, fontFamily)
  });
};

var fileIcon = function fileIcon(fileSvgPath) {
  return "\n  &:before{\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 30' %3E%3Cpath fill='".concat(encodeURIComponent(colors.theme1.mid), "' d='").concat(fileSvgPath, "'/%3E%3C/svg%3E\");\n  }\n");
};

var globalStyles = function globalStyles() {
  var fontSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "62.5%";
  var fontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
  return css(_templateObject(), fontSize, fontFamily, colors.states.focus, spacing.s, spacing.xl, spacing.s, colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, fileIcon(filePdfPath), fileIcon(filePowerpointPath), fileIcon(fileWordPath), fileIcon(fileExcelPath), fileIcon(filePath), colors.theme1.midLight, colors.theme1.midLight, colors.theme1.mid, colors.states.visited, colors.states.visited, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.theme1.xDark);
};

var LinkColors = css(_templateObject2(), colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.states.visited);
var LinkColorsInverted = css(_templateObject3(), colors.theme1.mid, colors.theme1.xDark, colors.states.visited);
var LinkWrapperColorStyle = css(_templateObject4(), LinkColors);
var LinkWrapperInvertedColorStyle = css(_templateObject5(), LinkColorsInverted);
var ElementLinkColorStyle = css(_templateObject6(), LinkColors);
var ElementLinkInvertedColorStyle = css(_templateObject7(), LinkColorsInverted);
var VisuallyHidden = css(_templateObject8());

/** @jsx jsx */
//const dateAndTimeFormat = "d MMMM yyyy 'kl.' HH:mm";
//const dateFormat = "d MMMM yyyy";
//const timeFormat = "'kl.' HH:mm";

var Formats = {
  dateFormat: "d MMMM yyyy",
  timeFormat: "'kl.' HH:mm",
  dateAndTimeFormat: "d MMMM yyyy 'kl.' HH:mm",
  simpleDateAndTimeFormat: "yyyy MM dd HH:mm:ss"
};

var isDate = function isDate(date) {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
};

var DateFormat = function DateFormat(_ref) {
  var _ref$date = _ref.date,
      date = _ref$date === void 0 ? null : _ref$date,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? null : _ref$dateFormat,
      _ref$showDate = _ref.showDate,
      showDate = _ref$showDate === void 0 ? false : _ref$showDate,
      _ref$showTime = _ref.showTime,
      showTime = _ref$showTime === void 0 ? false : _ref$showTime;

  if (isDate(date)) {
    var displayFormat;
    if (dateFormat) displayFormat = dateFormat;else displayFormat = showDate && showTime ? Formats.dateAndTimeFormat : showDate ? Formats.dateFormat : showTime ? Formats.timeFormat : Formats.simpleDateAndTimeFormat;
    return format(parseISO(date), displayFormat, {
      locale: sv
    });
  } else {
    console.log("parse date failed");
    return null;
  }
};

var Adapt = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M7.57533795,4 L0,18.1562809 L3.00362677,19.7599736 L4.3316848,17.2713485 L9.78766897,17.2713485 L11.2812397,14.5057699 L5.82459611,14.5057699 L8.79195516,8.86646884 L11.5014837,14.1008902 L13.3445434,10.6541378 L9.78766897,4 L7.57533795,4 Z M16.4240026,8.42334322 L11.0220903,18.5433564 L13.3267392,19.7599736 L14.6350148,17.2713485 L20.239367,17.2713485 L21.5661062,19.7599736 L24,18.4701616 L18.6350148,8.42334322 L16.4240026,8.42334322 Z M17.4368612,11.7415101 L19.0590175,15.0596769 L15.8160237,15.0596769 L17.4368612,11.7415101 Z"
  }));
});

var Close = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M15.5696544,12.005 L23.6488809,3.92612623 C24.1160647,3.45888353 24.1160647,2.70064538 23.6488809,2.23265269 L21.7715207,0.355432024 C21.304262,-0.111810675 20.5460727,-0.111810675 20.077989,0.355432024 L11.9995875,8.43505578 L3.92043601,0.356182013 C3.45317725,-0.111060687 2.69491303,-0.111060687 2.22697926,0.356182013 L0.350444071,2.23265269 C-0.11681469,2.69989539 -0.11681469,3.45813354 0.350444071,3.92612623 L8.42952055,12.005 L0.350444071,20.0838738 C-0.11681469,20.5511165 -0.11681469,21.3093546 0.350444071,21.7773473 L2.22765427,23.654568 C2.69491303,24.1218107 3.45317725,24.1218107 3.92118602,23.654568 L11.9995875,15.5749442 L20.078739,23.653818 C20.5460727,24.1210607 21.304262,24.1210607 21.7722707,23.653818 L23.6495559,21.7765973 C24.1168147,21.3093546 24.1168147,20.5511165 23.6495559,20.0831238 L15.5696544,12.005 Z"
  }));
});

var Easytoread = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M10.7133001,17.8758145 C10.1705634,17.3491759 9.89919509,16.7259486 9.89919509,15.9992334 L9.89919509,0 L14.0364124,0 L14.0364124,15.3323112 L20.9356075,15.3323112 L20.9356075,18.6646225 L12.6565734,18.6646225 C11.9068609,18.6646225 11.2560368,18.402453 10.7133001,17.8758145 M3.81410502,23.220391 C3.27136834,22.7029513 3,22.0728248 3,21.3323112 L3,5.33077808 L7.13721732,5.33077808 L7.13721732,20.665389 L14.0364124,20.665389 L14.0364124,24 L5.75737831,24 C5.00766577,24 4.3568417,23.7401303 3.81410502,23.220391"
  }));
});

var Search = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "16px",
    height: "16px",
    viewBox: "0 0 16 16"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M30.5001686,30.4989389 C28.2907779,30.4989389 26.5000648,28.7115592 26.5000648,26.4995019 C26.5000648,24.2901112 28.2874445,22.4993981 30.5001686,22.4993981 C32.7102259,22.4993981 34.5002723,24.2874445 34.5002723,26.4995019 C34.5002723,28.7082258 32.7128926,30.4989389 30.5001686,30.4989389 M39.7824092,33.833692 L36.6669951,30.7176112 C36.5263248,30.5769409 36.3349865,30.4989389 36.135648,30.4989389 L35.6256348,30.4989389 C36.4883238,29.3962436 37.0003371,28.0088743 37.0003371,26.4995019 C37.0003371,22.9094088 34.0909283,20 30.5001686,20 C26.9094088,20 24,22.9094088 24,26.4995019 C24,30.0902616 26.9094088,32.9990037 30.5001686,32.9990037 C32.0102077,32.9990037 33.397577,32.4863238 34.5002723,31.6236347 L34.5002723,32.133648 C34.5002723,32.3336531 34.578941,32.5243248 34.7196113,32.6643284 L37.8350254,35.7804092 C38.129033,36.0737501 38.6043787,36.0737501 38.8943862,35.7804092 L39.7790758,34.8957196 C40.0730834,34.601712 40.0730834,34.127033 39.7824092,33.833692",
    transform: "translate(-24 -20)"
  }));
});

var Signlanguage = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M11.0194444,5.35944444 L8.35944444,1.77944444 C8.14666667,1.51277778 8.03888889,1.23888889 8.03888889,0.96 C8.03888889,0.706111111 8.13555556,0.483333333 8.32888889,0.29 C8.52222222,0.0966666667 8.75277778,0 9.01944444,0 C9.27222222,0 9.47277778,0.0666666667 9.61888889,0.198888889 L14.6594444,4.27944444 L14.6594444,2.69888889 C14.6594444,2.19333333 14.7961111,1.73333333 15.0694444,1.31944444 C15.3427778,0.906111111 15.71,0.582777778 16.17,0.349444444 C16.63,0.116111111 17.1261111,0 17.6594444,0 L17.6594444,9.77944444 L11.0194444,5.35944444 Z M3.61888889,7.61888889 C3.38,7.43277778 3.26,7.18666667 3.26,6.88 C3.26,6.59944444 3.35944444,6.36611111 3.55944444,6.18 C3.76,5.99333333 3.99222222,5.89944444 4.26,5.89944444 C4.47277778,5.89944444 4.69222222,5.94611111 4.92,6.04 L8.09944444,7.54 L4.31944444,3.43944444 C4.09277778,3.17277778 3.97944444,2.92666667 3.97944444,2.69888889 C3.97944444,2.42 4.08611111,2.17 4.3,1.94944444 C4.51277778,1.72944444 4.75944444,1.61944444 5.03888889,1.61944444 C5.23944444,1.61944444 5.44611111,1.68666667 5.65944444,1.81944444 L9.85944444,4.59944444 C8.96555556,5.61333333 8.51944444,6.65333333 8.51944444,7.72 C8.51944444,8.58722222 8.68,9.31333333 9,9.89944444 L6.38,9.89944444 L3.61888889,7.61888889 Z M8.80944444,23.72 C8.61611111,23.5333333 8.51944444,23.2861111 8.51944444,22.9794444 C8.51944444,22.7394444 8.58277778,22.5461111 8.71,22.3994444 C8.83611111,22.2533333 9.03944444,22.1122222 9.31944444,21.98 L11.8594444,20.6994444 L6,20.6994444 C5.73222222,20.6994444 5.50611111,20.6066667 5.31944444,20.42 C5.13277778,20.2322222 5.03888889,20.0061111 5.03888889,19.7394444 C5.03888889,19.4866667 5.12277778,19.2666667 5.28888889,19.08 C5.45611111,18.8927778 5.69222222,18.76 6,18.68 L10.3,17.54 L3.96,16.9794444 C3.65222222,16.9394444 3.41611111,16.8194444 3.25,16.6194444 C3.08277778,16.42 3,16.1866667 3,15.92 C3,15.6394444 3.08277778,15.3994444 3.25,15.1994444 C3.41611111,15 3.65222222,14.8866667 3.96,14.8594444 L10.3,14.26 L6,13.1194444 C5.35944444,12.9461111 5.03888889,12.5927778 5.03888889,12.06 C5.03888889,11.7933333 5.13555556,11.5666667 5.32888889,11.38 C5.52222222,11.1933333 5.74611111,11.1 6,11.1 L12.38,11.1 L10.8194444,10.1394444 C10.4727778,9.92666667 10.2033333,9.62333333 10.01,9.22944444 C9.81611111,8.83722222 9.72,8.40611111 9.72,7.93944444 C9.72,7.34 9.88555556,6.78611111 10.22,6.27944444 L19.7594444,12.6188889 C20.2127778,12.9266667 20.5722222,13.3261111 20.84,13.8194444 C21.1066667,14.3133333 21.2394444,14.8533333 21.2394444,15.4394444 L21.2394444,18.3 C21.2394444,19.0194444 21.0661111,19.6466667 20.7194444,20.18 C20.3727778,20.7127778 19.9061111,21.0666667 19.3194444,21.2394444 L9.89944444,23.9394444 C9.77944444,23.9794444 9.63277778,24 9.46,24 C9.22,24 9.00277778,23.9061111 8.80944444,23.72 L8.80944444,23.72 Z"
  }));
});

var Volume = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M17.8215947,20.3378738 C19.0186047,19.3700997 19.954485,18.1920266 20.6272425,16.8066445 C21.3,15.4192691 21.6368771,13.9302326 21.6368771,12.3375415 C21.6368771,10.7458472 21.3,9.25681063 20.6272425,7.87043189 C19.954485,6.48504983 19.0186047,5.30598007 17.8215947,4.33820598 L19.4950166,2.66478405 C20.9063123,3.8627907 22.0096346,5.29800664 22.8059801,6.97242525 C23.6023256,8.64584718 24,10.4348837 24,12.3375415 C24,14.241196 23.6023256,16.0302326 22.8059801,17.7046512 C22.0096346,19.3790698 20.9063123,20.8152824 19.4950166,22.0122924 L17.8215947,20.3378738 Z M14.6700997,17.1873754 C15.4415282,16.6302326 16.0574751,15.9275748 16.5159468,15.0833887 C16.9754153,14.238206 17.2066445,13.3232558 17.2066445,12.3375415 C17.2066445,11.3528239 16.9754153,10.4388704 16.5159468,9.59368771 C16.0574751,8.74950166 15.4415282,8.04684385 14.6700997,7.48870432 L16.3445183,5.81528239 C17.3451827,6.56976744 18.1325581,7.52159468 18.7076412,8.67076412 C19.2817276,9.81993355 19.5687708,11.0418605 19.5687708,12.3375415 C19.5687708,13.6342193 19.2817276,14.8571429 18.7076412,16.0063123 C18.1325581,17.1554817 17.3451827,18.107309 16.3445183,18.861794 L14.6700997,17.1873754 Z M5.16877076,16.7687708 L1.47707641,16.7687708 C1.06644518,16.7687708 0.716611296,16.6252492 0.431561462,16.338206 C0.143521595,16.0521595 0,15.7023256 0,15.292691 L0,9.38438538 C0,8.97475083 0.143521595,8.62491694 0.431561462,8.33787375 C0.716611296,8.05182724 1.06644518,7.90730897 1.47707641,7.90730897 L5.16877076,7.90730897 L11.0033223,2 L13.2916944,2 L13.2916944,22.6770764 L11.0033223,22.6770764 L5.16877076,16.7687708 Z"
  }));
});

var Otherlang = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M21.4164055,15.4167742 C21.8418433,14.1920737 22.0549309,12.9658986 22.0549309,11.7404608 C22.0549309,10.4287558 21.8094009,9.17529954 21.3190783,7.97861751 C20.8294931,6.78267281 20.1518894,5.72682028 19.2870046,4.81032258 C18.4221198,3.89603687 17.4414747,3.18525346 16.3465438,2.68092166 C16.3170507,2.82543779 16.3030415,2.94046083 16.3030415,3.02746544 C16.3030415,3.32976959 16.3826728,3.66156682 16.5411982,4.02138249 C16.6997235,4.38193548 16.9157604,4.67023041 17.1900461,4.88626728 C16.9010138,5.08829493 16.6857143,5.35078341 16.5411982,5.6759447 C16.3974194,6.00036866 16.324424,6.32847926 16.324424,6.65880184 C16.324424,6.93382488 16.3752995,7.18599078 16.4763134,7.41603687 C17.2976959,7.04147465 18.2776037,6.85419355 19.4167742,6.85419355 C19.5030415,6.98396313 19.5856221,7.14986175 19.6659908,7.3518894 C19.7441475,7.55317972 19.7839631,7.71907834 19.7839631,7.84884793 C18.8328111,8.00737327 18.0726267,8.29198157 17.5034101,8.70341014 C16.9334562,9.11336406 16.5478341,9.7083871 16.3465438,10.4862673 C16.4763134,11.1498618 16.7756682,11.7264516 17.243871,12.2167742 C17.7120737,12.7063594 18.2562212,13.0676498 18.8763134,13.2976959 C18.8763134,14.2053456 18.9375115,15.0628571 19.0599078,15.8709677 C19.1823041,16.678341 19.3887558,17.5505991 19.6763134,18.4870046 C20.4114286,17.6656221 20.9917051,16.6414747 21.4164055,15.4167742 M12.2919816,20.0980645 C13.0492166,19.5281106 13.6943779,18.8689401 14.2274654,18.1198157 C14.7612903,17.3699539 15.0997235,16.5920737 15.2435023,15.7839631 C14.5231336,14.7030415 13.5601843,13.8204608 12.3568664,13.1347465 C11.1535484,12.4512442 9.76589862,11.9867281 8.19465438,11.7404608 C8.19465438,10.8188018 7.90709677,10.1692166 7.33050691,9.79465438 C6.89769585,9.90967742 6.55115207,10.1264516 6.29235023,10.442765 C6.13308756,10.3992627 5.97898618,10.3026728 5.82709677,10.1515207 C5.6759447,10.0003687 5.57124424,9.83815668 5.51373272,9.66488479 C5.62949309,9.14654378 5.79834101,8.6997235 6.02248848,8.32368664 C6.24516129,7.95059908 6.59465438,7.61142857 7.07023041,7.3083871 C7.38728111,7.33714286 7.72276498,7.46322581 8.0759447,7.68663594 C8.42912442,7.91004608 8.74322581,8.16221198 9.01677419,8.44313364 C9.28958525,8.7240553 9.46285714,8.95852535 9.53585253,9.14654378 L10.0106912,9.14654378 C10.2989862,8.68497696 10.4435023,8.19539171 10.4435023,7.67557604 C10.4435023,7.21400922 10.321106,6.79668203 10.0763134,6.42138249 C9.83078341,6.04682028 9.55723502,5.76589862 9.25419355,5.57788018 C10.2635945,3.97861751 11.9063594,2.86156682 14.1839631,2.22672811 L14.1839631,1.90230415 C13.5498618,1.75926267 12.8147465,1.68626728 11.9786175,1.68626728 C10.436129,1.68626728 8.99834101,2.01437788 7.66525346,2.66986175 C6.33142857,3.32608295 5.20700461,4.19465438 4.29198157,5.27631336 C3.3762212,6.35723502 2.74580645,7.52442396 2.4,8.77788018 C2.71631336,9.57198157 3.19705069,10.2053456 3.83778802,10.681659 C4.48,11.1564977 5.25493088,11.44553 6.16258065,11.5458065 C6.56589862,11.7765899 7.03041475,12.1076498 7.55760369,12.5404608 C8.08331797,12.9740092 8.5043318,13.3485714 8.82211982,13.6656221 C8.49032258,14.0549309 8.20276498,14.4906912 7.95723502,14.9729032 C7.71170507,15.4565899 7.54654378,15.9137327 7.4602765,16.3458065 C7.61880184,16.8221198 7.87760369,17.2401843 8.23815668,17.6 C8.59797235,17.9612903 8.98801843,18.2134562 9.40608295,18.357235 C9.40608295,18.8903226 9.3883871,19.3482028 9.35225806,19.7308756 C9.31539171,20.1120737 9.21806452,20.4475576 9.05953917,20.7358525 C9.11778802,20.9091244 9.23281106,21.0521659 9.40608295,21.1686636 C9.57935484,21.2836866 9.76589862,21.3625806 9.96792627,21.4060829 C10.760553,21.1030415 11.5354839,20.6672811 12.2919816,20.0980645 M6.00036866,22.3786175 C4.16221198,21.2976959 2.70304147,19.8385253 1.62138249,17.9996313 C0.540460829,16.162212 0,14.1625806 0,12 C0,9.83815668 0.540460829,7.83852535 1.62138249,6.00036866 C2.70304147,4.16221198 4.16221198,2.70304147 6.00036866,1.62211982 C7.83778802,0.540460829 9.83741935,0 12,0 C14.1625806,0 16.1629493,0.540460829 18.001106,1.62211982 C19.837788,2.70304147 21.2984332,4.16221198 22.3793548,6.00036866 C23.4602765,7.83852535 24.0007373,9.83815668 24.0007373,12 C24.0007373,14.1625806 23.4602765,16.162212 22.3793548,17.9996313 C21.2984332,19.8385253 19.837788,21.2976959 18.001106,22.3786175 C16.1629493,23.4595392 14.1625806,24 12,24 C9.83741935,24 7.83778802,23.4595392 6.00036866,22.3786175"
  }));
});

var Ecc = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "42px",
    height: "36px",
    viewBox: "0 0 42 36"
  }, otherAttr), jsx("title", null, title), jsx("polygon", {
    points: "22.5779013 30.784614 24.8519345 30.784614 24.8519345 31.3384601 23.4364648 31.3384601 23.4364648 32.9769217 24.6895035 32.9769217 24.6895035 33.5538448 23.4364648 33.5538448 23.4364648 35.307691 24.8519345 35.307691 24.8519345 35.8846141 22.5779013 35.8846141"
  }), jsx("path", {
    d: "M28.146961,30.8538462 L28.146961,31.4769231 C27.9381212,31.3846154 27.7524859,31.3384616 27.5900549,31.3384616 C27.3812151,31.3384616 27.2187842,31.3846154 27.0795577,31.4538462 C26.9403312,31.5461539 26.8243091,31.6615385 26.7314914,31.823077 C26.6386737,31.9846154 26.5690604,32.2153847 26.5226516,32.4692308 C26.4762428,32.723077 26.4530383,33.023077 26.4530383,33.3923078 C26.4530383,34.6615386 26.8475135,35.2846155 27.6596682,35.2846155 C27.7988947,35.2846155 27.9613257,35.2615386 28.1701654,35.1692309 L28.1701654,35.7923079 C27.9613257,35.8846156 27.7292815,35.9307694 27.4740328,35.9307694 C26.1977897,35.9307694 25.5480659,35.0769232 25.5480659,33.3923078 C25.5480659,32.4692308 25.7104969,31.8 26.0121543,31.3615385 C26.3370162,30.9230769 26.8011046,30.6923077 27.4508284,30.6923077 C27.6596682,30.7153846 27.8917124,30.7615385 28.146961,30.8538462"
  }), jsx("path", {
    d: "M31.3491717,30.8538462 L31.3491717,31.4769231 C31.1403319,31.3846154 30.9546965,31.3384616 30.7922656,31.3384616 C30.5834258,31.3384616 30.4209949,31.3846154 30.2817683,31.4538462 C30.1425418,31.5461539 30.0265197,31.6615385 29.933702,31.823077 C29.8408844,31.9846154 29.7712711,32.2153847 29.7248622,32.4692308 C29.6784534,32.723077 29.655249,33.023077 29.655249,33.3923078 C29.655249,34.6615386 30.0497241,35.2846155 30.8618788,35.2846155 C31.0011054,35.2846155 31.1635363,35.2615386 31.3723761,35.1692309 L31.3723761,35.7923079 C31.1635363,35.8846156 30.9314921,35.9307694 30.6762435,35.9307694 C29.4000004,35.9307694 28.7502766,35.0769232 28.7502766,33.3923078 C28.7502766,32.4692308 28.9127075,31.8 29.214365,31.3615385 C29.5160225,30.9230769 30.0033153,30.6923077 30.6530391,30.6923077 C30.8618788,30.7153846 31.1171275,30.7615385 31.3491717,30.8538462"
  }), jsx("rect", {
    x: "31.5812169",
    y: "33.8769238",
    width: "1.4850829",
    height: "1"
  }), jsx("path", {
    d: "M33.5535926,30.7846161 L34.3425428,30.7846161 L35.2011064,32.8153854 C35.456355,33.3923085 35.6651948,34.0153854 35.8508301,34.6615393 C35.7812169,34.2692316 35.734808,33.9000008 35.6883992,33.5769239 C35.6651948,33.2538469 35.6419903,32.9538469 35.6419903,32.6769238 L35.6419903,30.7615392 L36.5005539,30.7615392 L36.5005539,35.8846163 L35.6883992,35.8846163 L34.737018,33.5769239 C34.6442003,33.3692316 34.574587,33.1384623 34.4817694,32.9076931 C34.4121561,32.6769238 34.3425428,32.4461546 34.2729296,32.1923084 C34.2729296,32.1692315 34.2497252,32.1230777 34.2497252,32.0769238 C34.2265207,32.03077 34.2265207,31.9846161 34.2033163,31.9153854 C34.2033163,31.9615392 34.2265207,32.03077 34.2265207,32.0538469 C34.2265207,32.1000008 34.2265207,32.1230777 34.2497252,32.1692315 L34.296134,32.7000008 L34.3425428,33.3230777 C34.3425428,33.3692316 34.3425428,33.3923085 34.3425428,33.4615393 C34.3425428,33.5076931 34.3425428,33.5769239 34.3425428,33.6230777 L34.3889517,35.8615393 L33.5535926,35.8615393 L33.5535926,30.7846161 Z"
  }), jsx("path", {
    d: "M39.0762438,34.7307679 L39.8187852,34.7307679 C39.7723764,35.5384602 39.3546968,35.9307679 38.588951,35.9307679 C38.3569068,35.9307679 38.1712714,35.9076909 38.0088405,35.8384602 C37.8464095,35.7692294 37.707183,35.6538448 37.6143653,35.5153832 C37.4983432,35.3769217 37.42873,35.1923063 37.3823212,34.9615371 C37.3359123,34.7307679 37.3127079,34.4769217 37.3127079,34.1769217 C37.3127079,33.5769217 37.4055256,33.1153832 37.6143653,32.8384601 C37.8232051,32.5384601 38.148067,32.3999986 38.588951,32.3999986 C39.4475145,32.3999986 39.8651941,32.9999986 39.8651941,34.1999986 L39.8651941,34.2692294 L38.0784537,34.2692294 C38.0784537,35.0076909 38.2640891,35.3769217 38.6121554,35.3769217 C38.9138129,35.3999986 39.0762438,35.1692294 39.0762438,34.7307679 L39.0762438,34.7307679 Z M39.029835,33.8307678 C39.0066306,33.4615371 38.9370173,33.2307678 38.867404,33.1153832 C38.7977908,32.9999986 38.6817687,32.9307678 38.5193377,32.9307678 C38.3569068,32.9307678 38.2408847,32.9999986 38.1712714,33.1153832 C38.1016582,33.2307678 38.0552493,33.4615371 38.0088405,33.8307678 L39.029835,33.8307678 Z"
  }), jsx("polygon", {
    points: "40.6309399 31.5 41.4198902 31.5 41.4198902 32.4692308 41.8607742 32.4692308 41.8607742 32.9538462 41.4198902 32.9538462 41.4198902 35.8846154 40.6309399 35.8846154 40.6309399 32.9538462 40.2132604 32.9538462 40.2132604 32.4692308 40.6309399 32.4692308"
  }), jsx("path", {
    d: "M22.3690611,9.94615349 C22.4850832,9.99230734 32.6718238,14.2615383 34.667404,29.1692311 L35.2243101,29.1692311 C33.1823211,14.053846 23.2276247,10.3153843 23.1116026,10.2692304 L22.3690611,9.94615349 Z"
  }), jsx("path", {
    d: "M20.3270715,9.92307692 C20.4430936,9.96923077 30.6298339,14.3538461 32.625414,29.1923073 L33.4375687,29.2153843 C31.3955798,14.0538461 21.6729278,10.3846154 21.3712704,10.2461538 C21.185635,10.1538461 20.3270715,9.92307692 20.3270715,9.92307692"
  }), jsx("path", {
    d: "M10.511602,9.96923095 C10.6276241,10.0153848 20.4662984,14.6769232 22.4386742,29.353846 L24.0629836,29.3769229 C21.9977902,14.0538463 12.5071822,10.6846155 12.0198894,10.4769232 L10.511602,9.96923095 Z"
  }), jsx("path", {
    d: "M13.2265193,9.92307692 C13.3425414,9.96923077 23.8077349,14.4 25.8033151,29.3076923 L26.3834256,29.3076923 C24.3414366,14.1923077 14.1779006,10.3384615 14.0618785,10.2692308 L13.2265193,9.92307692 Z"
  }), jsx("path", {
    d: "M17.8209952,9.85384633 C17.9370173,9.90000018 28.4254152,14.5384617 30.3977909,29.2153848 L32.0221003,29.2384617 C29.9569069,13.9153848 19.8397797,10.5923079 19.3524869,10.3846156 L17.8209952,9.85384633 Z"
  }), jsx("path", {
    d: "M15.2917131,9.8769229 C15.4077352,9.92307675 25.6176799,14.607692 27.5900556,29.2846145 L29.214365,29.3076914 C27.1491716,13.9846151 17.5193374,10.7999998 17.0320446,10.5692306 L15.2917131,9.8769229 Z"
  }), jsx("path", {
    d: "M26.1281764,10.015385 C26.2441985,10.0615388 36.8022096,14.515385 38.7745853,29.1923073 L40.3988947,29.2153843 C38.3337013,13.8923079 28.2397787,10.8461542 27.7524858,10.6153849 L26.1281764,10.015385 Z"
  }), jsx("path", {
    d: "M24.0397787,9.94615349 C24.1558008,9.99230734 34.3425414,14.2153841 36.361326,29.1461528 L36.7790055,29.1461528 C34.7602209,14.0538457 24.8751378,10.2692304 24.7591157,10.2230766 L24.0397787,9.94615349 Z"
  }), jsx("path", {
    d: "M0,13.407692 L0.0928176796,13.4307689 C2.08839779,11.0307688 5.05856354,10.2692303 6.93812155,10.4999996 C10.1403315,10.8923073 13.6906077,14.8615382 14.4331492,16.4769228 L14.6187845,16.6615382 C14.5027624,16.407692 11.6950276,10.361538 7.03093923,9.78461495 C4.64088398,9.46153802 2.27403315,10.684615 0,13.407692"
  }), jsx("path", {
    d: "M26.1977892,5.7230767 C27.2187836,6.27692283 28.7270709,7.03846126 29.5856344,8.72307658 C29.2839769,7.84615354 29.2607725,5.63076901 28.7502753,4.61538443 C30.119336,4.22307676 31.4419879,4.13076907 32.7878442,4.2692306 C31.1403305,3.6461537 29.6552477,3.18461526 28.2629825,2.88461527 C28.0309383,1.93846146 27.8220985,0.969230731 27.6364632,-8.19857003e-16 C27.1027615,0.669230743 26.4994467,1.5 25.7801097,2.51538452 C24.4574578,2.42307683 23.1580103,2.53846144 21.7889496,2.86153835 C22.5546954,3.46153832 23.3900545,4.0615383 24.3182313,4.63846136 C23.5060766,5.88461515 22.6011042,7.31538433 21.6265186,8.90769196 C23.2044191,7.5 24.7127064,6.41538436 26.1513804,5.65384593 C26.1513804,5.7230767 26.1745848,5.7230767 26.1977892,5.7230767"
  }), jsx("path", {
    d: "M35.2243079,9.76153835 C34.0640869,10.1307691 32.8342527,10.7076922 31.5348052,11.4461537 C32.3701643,10.4076922 33.1591146,9.46153835 33.901656,8.5846153 C33.182319,7.98461531 32.5093908,7.43076917 31.8364627,6.92307688 C33.0198881,6.80769227 34.1337002,6.85384611 35.2243079,7.08461534 C35.8972361,6.32307689 36.500551,5.65384614 37.057457,5.07692308 C37.0806615,5.95384613 37.1270703,6.83076919 37.1966836,7.68461532 C38.2640868,8.12307685 39.3314901,8.76923068 40.4220979,9.57692308 C39.4475122,9.27692297 38.4497222,9.18461528 37.3591145,9.2999999 C37.4519322,10.1307691 37.4519322,11.4923075 37.5911587,12.2999998 C36.9646394,11.3769229 36.0364626,10.3615383 35.2939212,9.7153845 C35.2707167,9.76153835 35.2475123,9.76153835 35.2243079,9.76153835"
  }), jsx("path", {
    d: "M38.5657458,16.2230766 C38.078453,16.3384612 37.6143646,16.5230766 37.1270718,16.7999997 C37.4287293,16.3846151 37.7535912,15.9923074 38.0552486,15.6692304 C37.7767956,15.3692304 37.4751381,15.0692304 37.1734807,14.7692304 C37.6839779,14.8153843 38.1712707,14.9307689 38.6353591,15.0923074 C38.9370166,14.7923073 39.2618784,14.5615381 39.5635359,14.3307689 C39.5403315,14.7230766 39.517127,15.0923074 39.4939226,15.4384612 C39.9348066,15.6692304 40.3756906,15.9692304 40.7701657,16.3153843 C40.3756906,16.1769228 39.9116022,16.107692 39.4475138,16.1307689 C39.4243094,16.4769228 39.4011049,16.8230766 39.4011049,17.1692305 C39.1226519,16.8461535 38.8441989,16.5461535 38.5657458,16.2461535 C38.5889503,16.2230766 38.5657458,16.2230766 38.5657458,16.2230766"
  }), jsx("path", {
    d: "M12.6464092,8.63076914 C12.4375695,8.86153834 12.2287297,9.16153834 12.0430943,9.48461525 C12.0198899,9.16153834 12.0198899,8.86153834 12.0198899,8.56153835 C11.6718236,8.53846142 11.3237573,8.53846142 10.9988954,8.56153835 C11.3237573,8.3076922 11.6486192,8.12307682 12.0198899,8.0076922 C12.0198899,7.70769221 12.0198899,7.40769221 12.0198899,7.13076914 C12.2519341,7.36153837 12.4607739,7.61538452 12.6928181,7.82307682 C13.0640888,7.75384605 13.4353595,7.77692298 13.8066303,7.82307682 C13.5745861,7.91538451 13.3425419,8.05384605 13.1104977,8.23846143 C13.3193374,8.44615373 13.5513817,8.65384604 13.7602214,8.86153834 C13.3889507,8.74615373 13.01768,8.67692296 12.6464092,8.63076914 C12.6696137,8.60769219 12.6696137,8.63076914 12.6464092,8.63076914"
  }), jsx("path", {
    d: "M17.7745853,6.27692305 C17.0552483,6.85384611 16.3823201,7.5692307 15.7558008,8.39999991 C15.9182318,7.47692301 16.1038671,6.60000009 16.3127069,5.76923075 C15.5005522,5.51538461 14.6883976,5.30769231 13.8762429,5.14615385 C14.7812153,4.73076925 15.7325964,4.43076925 16.707182,4.29230772 C16.9160218,3.50769236 17.148066,2.79230776 17.3801102,2.10000009 C17.7513809,2.81538468 18.1226516,3.48461543 18.4939223,4.15384618 C19.4917123,4.15384618 20.4662979,4.31538464 21.4408834,4.59230771 C20.7215465,4.70769232 19.9558006,4.96153847 19.2132592,5.37692307 C19.5845299,5.99999998 19.9325962,6.60000009 20.3038669,7.19999995 C19.4685078,6.85384611 18.6331488,6.55384612 17.8209941,6.27692305 C17.7977897,6.25384613 17.7745853,6.27692305 17.7745853,6.27692305"
  }));
});

var arrowPath = 'M18.8200426,7.70004261 C18.4334198,7.31341975 17.8080945,7.31122597 17.4179582,7.70051231 L12.7020418,12.4061544 C12.3143148,12.7930366 11.6880945,12.7954407 11.2979582,12.4061544 L6.58204182,7.70051231 C6.19431483,7.31363005 5.56955624,7.31044376 5.17995739,7.70004261 L4.70004261,8.17995739 C4.31341975,8.56658025 4.3235178,9.2035178 4.70994663,9.58994663 L11.2900534,16.1700534 C11.6821461,16.5621461 12.3235178,16.5564822 12.7099466,16.1700534 L19.2900534,9.58994663 C19.6821461,9.19785393 19.6895562,8.56955624 19.2999574,8.17995739 L18.8200426,7.70004261 Z';
var Arrow = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: arrowPath
  }));
});

var Burger = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    height: "32px",
    viewBox: "0 0 32 32",
    width: "32px"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
  }));
});

var External = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "16px",
    height: "16px",
    viewBox: "0 0 16 16"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M15.25,0 L11.25,0 C10.5821875,0 10.2484375,0.8096875 10.71875,1.28125 L11.8353125,2.3978125 L4.21875,10.0115625 C3.92534375,10.3039688 3.92453125,10.7788125 4.21690625,11.07225 C4.2175,11.0728438 4.218125,11.0734688 4.21875,11.0740625 L4.9271875,11.78125 C5.2195625,12.0746563 5.6944375,12.0754688 5.98784375,11.7830938 C5.98846875,11.7824688 5.9890625,11.781875 5.9896875,11.78125 L13.6025,4.16625 L14.71875,5.28125 C15.1875,5.75 16,5.421875 16,4.75 L16,0.75 C16,0.33578125 15.6642187,0 15.25,0 M13.5,10 L12.5,10 C12.2238438,10 12,10.2238438 12,10.5 L12,14 L2,14 L2,4 L6.5,4 C6.776125,4 7,3.776125 7,3.5 L7,2.5 C7,2.223875 6.776125,2 6.5,2 L1.5,2 C0.6715625,2 0,2.6715625 0,3.5 L0,14.5 C0,15.3284375 0.6715625,16 1.5,16 L12.5,16 C13.3284375,16 14,15.3284375 14,14.5 L14,10.5 C14,10.2238438 13.7761562,10 13.5,10"
  }));
});

var Exclamationmark = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "43px",
    height: "43px",
    viewBox: "0 0 43 43"
  }, otherAttr, {
    version: "1.1"
  }), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, jsx("g", {
    transform: "translate(-250.000000, -2242.000000)"
  }, jsx("g", {
    transform: "translate(251.000000, 2243.000000)"
  }, jsx("g", null, jsx("g", {
    fill: "#FFFFFF",
    stroke: "#B50255",
    strokeWidth: "2"
  }, jsx("circle", {
    cx: "20.5",
    cy: "20.5",
    r: "20.5"
  })), jsx("g", {
    transform: "translate(21.000000, 20.500000) scale(-1, 1) translate(-21.000000, -20.500000) translate(18.000000, 10.000000)"
  }, jsx("path", {
    d: "M3,14 C1.34315217,14 0,15.5670109 0,17.5 C0,19.4329891 1.34315217,21 3,21 C4.65684783,21 6,19.4329891 6,17.5 C6,15.5670109 4.65684783,14 3,14",
    fill: "#B50255"
  }), jsx("path", {
    d: "M0.0223022727,0.949035 L0.528075,11.149035 C0.551734091,11.626335 0.910506818,11.999985 1.34502955,11.999985 L4.65498409,11.999985 C5.08943864,11.999985 5.44827955,11.626335 5.47193864,11.149035 L5.97771136,0.949035 C6.00327955,0.433485 5.63012045,-1.5e-05 5.16075682,-1.5e-05 L0.839188636,-1.5e-05 C0.369825,-1.5e-05 -0.00326590909,0.433485 0.0223022727,0.949035",
    fill: "#B50255"
  })))))));
});

var checkPath = "M6.09703073,13.0077039 L0.262878687,7.22504644 C-0.0876262289,6.87763523 -0.0876262289,6.3143474 0.262878687,5.96690144 L1.53219243,4.70875643 C1.88269734,4.36131046 2.45103631,4.36131046 2.80154123,4.70875643 L6.73170513,8.60419634 L15.1496783,0.260558412 C15.5001832,-0.0868528038 16.0685222,-0.0868528038 16.4190271,0.260558412 L17.6883408,1.51870342 C18.0388457,1.86611463 18.0388457,2.42940246 17.6883408,2.77684843 L7.36637953,13.0077386 C7.01583955,13.3551498 6.44753564,13.3551498 6.09703073,13.0077039 L6.09703073,13.0077039 Z";
var Check = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    "aria-hidden": "true",
    className: className,
    css: style,
    width: "18px",
    height: "14px",
    viewBox: "0 0 18 14"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: checkPath
  }));
});

var Oval = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    "aria-hidden": "true",
    className: className,
    css: style,
    width: "9px",
    height: "9px",
    viewBox: "0 0 9 9"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    transform: "translate(-250.000000, -2077.000000)",
    fill: "#B50255"
  }, jsx("circle", {
    cx: "254.5",
    cy: "2081.5",
    r: "4.5"
  })));
});

var LinkArrow = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M10.8028122,5.07167392 L11.5955809,4.25830089 C11.9312577,3.9138997 12.4740542,3.9138997 12.80616,4.25830089 L19.7482424,11.3771468 C20.0839192,11.721548 20.0839192,12.278452 19.7482424,12.6191894 L12.80616,19.7416991 C12.4704832,20.0861003 11.9276866,20.0861003 11.5955809,19.7416991 L10.8028122,18.9283261 C10.4635643,18.580261 10.4707064,18.0123655 10.8170963,17.6716281 L15.1201875,13.465537 L4.8570472,13.465537 C4.38210021,13.465537 4,13.0735058 4,12.5862148 L4,11.4137852 C4,10.9264942 4.38210021,10.534463 4.8570472,10.534463 L15.1201875,10.534463 L10.8170963,6.32837188 C10.4671354,5.98763453 10.4599933,5.41973895 10.8028122,5.07167392 Z"
  }));
});

var Filter = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("defs", null, jsx("path", {
    d: "M22.8738303,0 L1.12627192,0 C0.126990862,0 -0.377196542,1.21246835 0.330850198,1.92051499 L8.99995792,10.5909809 L8.99995792,20.2499933 C8.99995792,20.6170713 9.17906726,20.9610868 9.4798172,21.1716493 L13.2298634,23.7957109 C13.9696445,24.3135857 14.9999568,23.7887265 14.9999568,22.8740549 L14.9999568,10.5909809 L23.6693926,1.92051499 C24.3759862,1.2138746 23.8751738,0 22.8738303,0",
    id: "icon-filter"
  })), jsx("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "inherit",
    fillRule: "evenodd"
  }, jsx("g", null, jsx("g", null, jsx("mask", {
    id: "mask-2-filter"
  }, jsx("use", {
    href: "#icon-filter"
  })), jsx("use", {
    href: "#icon-filter"
  }), jsx("g", {
    mask: "url(#mask-2-filter)"
  }, jsx("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }))))));
});

var List = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    height: "32px",
    viewBox: "0 0 24 24",
    width: "32px"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M9.62498437,14.5 L22.875,14.5 C23.4963281,14.5 24,13.9963281 24,13.375 L24,9.625 C24,9.00367188 23.4963281,8.5 22.875,8.5 L9.62498437,8.5 C9.00365625,8.5 8.49998437,9.00367188 8.49998437,9.625 L8.49998437,13.375 C8.49998437,13.9963281 9.00365625,14.5 9.62498437,14.5 M8.49998437,2.125 L8.49998437,5.875 C8.49998437,6.49632812 9.00365625,7 9.62498437,7 L22.875,7 C23.4963281,7 24,6.49632812 24,5.875 L24,2.125 C24,1.50367188 23.4963281,1 22.875,1 L9.62498437,1 C9.00365625,1 8.49998437,1.50367188 8.49998437,2.125 M9.62498437,22 L22.875,22 C23.4963281,22 24,21.4963281 24,20.875 L24,17.125 C24,16.5036719 23.4963281,16 22.875,16 L9.62498437,16 C9.00365625,16 8.49998437,16.5036719 8.49998437,17.125 L8.49998437,20.875 C8.49998437,21.4963281 9.00365625,22 9.62498437,22 M5.87498438,1 L1.125,1 C0.503671875,1 0,1.50367188 0,2.125 L0,5.875 C0,6.49632812 0.503671875,7 1.125,7 L5.87498438,7 C6.4963125,7 6.99998438,6.49632812 6.99998438,5.875 L6.99998438,2.125 C6.99998438,1.50367188 6.4963125,1 5.87498438,1 M0,17.125 L0,20.875 C0,21.4963281 0.503671875,22 1.125,22 L5.87498438,22 C6.4963125,22 6.99998438,21.4963281 6.99998438,20.875 L6.99998438,17.125 C6.99998438,16.5036719 6.4963125,16 5.87498438,16 L1.125,16 C0.503671875,16 0,16.5036719 0,17.125 M6.99998438,9.625 L6.99998438,13.375 C6.99998438,13.9963281 6.4963125,14.5 5.87498438,14.5 L1.125,14.5 C0.503671875,14.5 0,13.9963281 0,13.375 L0,9.625 C0,9.00367188 0.503671875,8.5 1.125,8.5 L5.87498438,8.5 C6.4963125,8.5 6.99998438,9.00367188 6.99998438,9.625"
  }));
});

var Picturelist = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, "$", title), jsx("defs", null, jsx("path", {
    d: "M130.499984,17.125 L130.499984,20.875 C130.499984,21.4963281 131.003656,22 131.624984,22 L136.374969,22 C136.996297,22 137.499969,21.4963281 137.499969,20.875 L137.499969,17.125 C137.499969,16.5036719 136.996297,16 136.374969,16 L131.624984,16 C131.003656,16 130.499984,16.5036719 130.499984,17.125 M140.125016,22 L144.875,22 C145.496328,22 146,21.4963281 146,20.875 L146,17.125 C146,16.5036719 145.496328,16 144.875,16 L140.125016,16 C139.503688,16 139.000016,16.5036719 139.000016,17.125 L139.000016,20.875 C139.000016,21.4963281 139.503688,22 140.125016,22 M140.125016,14.5 L144.875,14.5 C145.496328,14.5 146,13.9963281 146,13.375 L146,9.625 C146,9.00367188 145.496328,8.5 144.875,8.5 L140.125016,8.5 C139.503688,8.5 139.000016,9.00367188 139.000016,9.625 L139.000016,13.375 C139.000016,13.9963281 139.503688,14.5 140.125016,14.5 M122,17.125 L122,20.875 C122,21.4963281 122.503672,22 123.125,22 L127.874984,22 C128.496312,22 128.999984,21.4963281 128.999984,20.875 L128.999984,17.125 C128.999984,16.5036719 128.496312,16 127.874984,16 L123.125,16 C122.503672,16 122,16.5036719 122,17.125 M127.874984,8.5 L123.125,8.5 C122.503672,8.5 122,9.00367188 122,9.625 L122,13.375 C122,13.9963281 122.503672,14.5 123.125,14.5 L127.874984,14.5 C128.496312,14.5 128.999984,13.9963281 128.999984,13.375 L128.999984,9.625 C128.999984,9.00367188 128.496312,8.5 127.874984,8.5 M137.500016,5.875 L137.500016,2.125 C137.500016,1.50367188 136.996344,1 136.375016,1 L131.624984,1 C131.003656,1 130.499984,1.50367188 130.499984,2.125 L130.499984,5.875 C130.499984,6.49632812 131.003656,7 131.624984,7 L136.374969,7 C136.996344,7 137.500016,6.49632812 137.500016,5.875 M139.000016,2.125 L139.000016,5.875 C139.000016,6.49632812 139.503688,7 140.125016,7 L144.875,7 C145.496328,7 146,6.49632812 146,5.875 L146,2.125 C146,1.50367188 145.496328,1 144.875,1 L140.125016,1 C139.503688,1 139.000016,1.50367188 139.000016,2.125 M137.500016,13.375 L137.500016,9.625 C137.500016,9.00367188 136.996344,8.5 136.375016,8.5 L131.624984,8.5 C131.003656,8.5 130.499984,9.00367188 130.499984,9.625 L130.499984,13.375 C130.499984,13.9963281 131.003656,14.5 131.624984,14.5 L136.374969,14.5 C136.996344,14.5 137.500016,13.9963281 137.500016,13.375 M128.999984,2.125 L128.999984,5.875 C128.999984,6.49632812 128.496312,7 127.874984,7 L123.125,7 C122.503672,7 122,6.49632812 122,5.875 L122,2.125 C122,1.50367188 122.503672,1 123.125,1 L127.874984,1 C128.496312,1 128.999984,1.50367188 128.999984,2.125",
    id: "path-1-picturelist"
  })), jsx("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "inherit",
    fillRule: "evenodd"
  }, jsx("g", null, jsx("g", {
    transform: "translate(-122.000000, 0.000000)"
  }, jsx("mask", {
    id: "mask-2-picturelist"
  }, jsx("use", {
    href: "#path-1-picturelist"
  })), jsx("use", {
    href: "#path-1-picturelist"
  }), jsx("g", {
    mask: "url(#mask-2-picturelist)"
  }, jsx("g", {
    transform: "translate(122.000000, 0.000000)"
  }, jsx("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  })))))));
});

var Clear = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    "aria-hidden": "true",
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M15.9225806,14.1 C16.0741935,14.2516129 16.0741935,14.4968065 15.9225806,14.6483871 L14.6451613,15.9225806 C14.4935484,16.0741935 14.2484194,16.0741935 14.0967742,15.9225806 L12,13.8064516 L9.9,15.9225806 C9.74841935,16.0741935 9.50322581,16.0741935 9.3516129,15.9225806 L8.07741935,14.6451613 C7.92583871,14.4935484 7.92583871,14.2484194 8.07741935,14.0967742 L10.1935484,12 L8.07741935,9.9 C7.92583871,9.74841935 7.92583871,9.50322581 8.07741935,9.3516129 L9.35483871,8.07419355 C9.50648387,7.92258065 9.7516129,7.92258065 9.90322581,8.07419355 L12,10.1935484 L14.1,8.07741935 C14.2516129,7.92583871 14.4968065,7.92583871 14.6483871,8.07741935 L15.9258387,9.35483871 C16.0774516,9.50648387 16.0774516,9.7516129 15.9258387,9.90322581 L13.8064516,12 L15.9225806,14.1 Z M12,4 C7.58064516,4 4,7.58064516 4,12 C4,16.4193548 7.58064516,20 12,20 C16.4193548,20 20,16.4193548 20,12 C20,7.58064516 16.4193548,4 12,4 L12,4 Z"
  }));
});

var Camera = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    height: "32px",
    viewBox: "0 0 24 24",
    width: "32px"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M16.125,13 C16.125,15.2734375 14.2734375,17.125 12,17.125 C9.7265625,17.125 7.875,15.2734375 7.875,13 C7.875,10.7265625 9.7265625,8.875 12,8.875 C14.2734375,8.875 16.125,10.7265625 16.125,13 M17.625,13 C17.625,9.896875 15.103125,7.375 12,7.375 C8.896875,7.375 6.375,9.896875 6.375,13 C6.375,16.103125 8.896875,18.625 12,18.625 C15.103125,18.625 17.625,16.103125 17.625,13 M24,6.25 L24,19.75 C24,20.9921875 22.9921875,22 21.75,22 L2.25,22 C1.0078125,22 0,20.9921875 0,19.75 L0,6.25 C0,5.0078125 1.0078125,4 2.25,4 L6.375,4 L6.9515625,2.4578125 C7.2796875,1.58125 8.11875,1 9.05625,1 L14.9390625,1 C15.8765625,1 16.715625,1.58125 17.04375,2.4578125 L17.625,4 L21.75,4 C22.9921875,4 24,5.0078125 24,6.25"
  }));
});

var Play = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "43px",
    height: "43px",
    viewBox: "0 0 496 496",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink"
  }, otherAttr), jsx("title", null, title), jsx("g", null, jsx("path", {
    d: "M248,0C111,0,0,111,0,248s111,248,248,248s248-111,248-248S385,0,248,0z"
  }), jsx("path", {
    fill: "#FFFFFF",
    d: "M363.7,272l-176,101c-15.8,8.8-35.7-2.5-35.7-21V144c0-18.4,19.8-29.8,35.7-21l176,107 C380.1,239.2,380.1,262.9,363.7,272z"
  })));
});

var warnPath = 'M6.78687222,5.24038333 L6.99292778,9.01816111 C7.00256667,9.19493889 7.14873333,9.33332778 7.32576111,9.33332778 L8.67426111,9.33332778 C8.85126111,9.33332778 8.99745556,9.19493889 9.00709444,9.01816111 L9.21315,5.24038333 C9.22356667,5.04943889 9.07153889,4.88888333 8.88031667,4.88888333 L7.11967778,4.88888333 C6.92845556,4.88888333 6.77645556,5.04943889 6.78687222,5.24038333 L6.78687222,5.24038333 Z M8.00001111,9.83332778 C7.29431667,9.83332778 6.72223333,10.4054111 6.72223333,11.1111056 C6.72223333,11.8168 7.29431667,12.3888833 8.00001111,12.3888833 C8.70570556,12.3888833 9.27778889,11.8168 9.27778889,11.1111056 C9.27778889,10.4054111 8.70570556,9.83332778 8.00001111,9.83332778 L8.00001111,9.83332778 Z M15.8199,12.2225778 C16.3326222,13.1113 15.6890667,14.2222167 14.6650111,14.2222167 L1.33484444,14.2222167 C0.308816667,14.2222167 -0.331794444,13.1096056 0.179927778,12.2225778 L6.84509444,0.666244444 C7.35806667,-0.222894444 8.64284444,-0.221283333 9.15492778,0.666244444 L15.8199,12.2225778 Z';
var Warn = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "20px",
    height: "20px",
    viewBox: "0 0 20 20"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: warnPath
  }));
});

var Question = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", {
    className: className,
    css: style,
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, jsx("title", null, title), jsx("path", {
    d: "M15.0588235,8 C15.0588235,12.4192581 11.6874991,16 7.52941176,16 C3.37132448,16 0,12.4192581 0,8 C0,3.58332258 3.37132448,0 7.52941176,0 C11.6874991,0 15.0588235,3.58332258 15.0588235,8 Z M7.7314611,2.64516129 C6.07690323,2.64516129 5.02163188,3.38570968 4.19297154,4.70187097 C4.0856167,4.8723871 4.12153321,5.10235484 4.27540038,5.22632258 L5.32888046,6.07503226 C5.48690702,6.20235484 5.71206072,6.17206452 5.83483871,6.00658065 C6.37719924,5.27567742 6.74908539,4.85183871 7.57458824,4.85183871 C8.19482353,4.85183871 8.9620038,5.27596774 8.9620038,5.915 C8.9620038,6.39809677 8.58665655,6.64619355 7.97425427,7.011 C7.26005313,7.4363871 6.31499051,7.96583871 6.31499051,9.29032258 L6.31499051,9.41935484 C6.31499051,9.63312903 6.47811765,9.80645161 6.67931689,9.80645161 L8.37950664,9.80645161 C8.58070588,9.80645161 8.74383302,9.63312903 8.74383302,9.41935484 L8.74383302,9.37635484 C8.74383302,8.45822581 11.2694042,8.42 11.2694042,5.93548387 C11.2694042,4.06445161 9.44276281,2.64516129 7.7314611,2.64516129 L7.7314611,2.64516129 Z M7.52941176,10.6451613 C6.75931689,10.6451613 6.13282732,11.3108065 6.13282732,12.1290323 C6.13282732,12.9472258 6.75931689,13.6129032 7.52941176,13.6129032 C8.29950664,13.6129032 8.9259962,12.9472258 8.9259962,12.1290323 C8.9259962,11.3108065 8.29950664,10.6451613 7.52941176,10.6451613 Z"
  }));
});

var iconDefinitions = {
  Adapt: Adapt,
  Close: Close,
  Easytoread: Easytoread,
  External: External,
  Search: Search,
  Signlanguage: Signlanguage,
  Volume: Volume,
  Otherlang: Otherlang,
  Arrow: Arrow,
  Ecc: Ecc,
  Burger: Burger,
  Exclamationmark: Exclamationmark,
  Check: Check,
  Oval: Oval,
  LinkArrow: LinkArrow,
  Filter: Filter,
  List: List,
  Picturelist: Picturelist,
  Clear: Clear,
  Camera: Camera,
  Play: Play,
  FileExcel: FileExcel,
  FilePdf: FilePdf,
  FilePowerpoint: FilePowerpoint,
  FileWord: FileWord,
  File: File,
  Warn: Warn,
  Question: Question
};

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["icon", "className", "style", "title"]);

  var Element = iconDefinitions[icon];

  if (Element === undefined) {
    console.log("Could not find icon in storybook tried to load: ".concat(icon));
    return null;
  }

  return jsx(Element, _extends({
    focusable: "false",
    title: title || icon || '',
    className: className,
    style: style,
    role: "img",
    "aria-label": title || icon || ''
  }, otherAttr));
};

var AppsAndGames = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "28px",
    viewBox: "0 0 32 28"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-514.000000, -2018.000000)"
  }, jsx("path", {
    d: "M525.333313,2039.5 L525.333313,2044.5 C525.333313,2045.32844 526.004875,2046 526.833313,2046 L533.166625,2046 C533.995063,2046 534.666625,2045.32844 534.666625,2044.5 L534.666625,2039.5 C534.666625,2038.67156 533.995063,2038 533.166625,2038 L526.833313,2038 C526.004875,2038 525.333313,2038.67156 525.333313,2039.5 M538.166687,2046 L544.5,2046 C545.328437,2046 546,2045.32844 546,2044.5 L546,2039.5 C546,2038.67156 545.328437,2038 544.5,2038 L538.166687,2038 C537.33825,2038 536.666687,2038.67156 536.666687,2039.5 L536.666687,2044.5 C536.666687,2045.32844 537.33825,2046 538.166687,2046 M538.166687,2036 L544.5,2036 C545.328437,2036 546,2035.32844 546,2034.5 L546,2029.5 C546,2028.67156 545.328437,2028 544.5,2028 L538.166687,2028 C537.33825,2028 536.666687,2028.67156 536.666687,2029.5 L536.666687,2034.5 C536.666687,2035.32844 537.33825,2036 538.166687,2036 M514,2039.5 L514,2044.5 C514,2045.32844 514.671563,2046 515.5,2046 L521.833313,2046 C522.66175,2046 523.333313,2045.32844 523.333313,2044.5 L523.333313,2039.5 C523.333313,2038.67156 522.66175,2038 521.833313,2038 L515.5,2038 C514.671563,2038 514,2038.67156 514,2039.5 M521.833313,2028 L515.5,2028 C514.671563,2028 514,2028.67156 514,2029.5 L514,2034.5 C514,2035.32844 514.671563,2036 515.5,2036 L521.833313,2036 C522.66175,2036 523.333313,2035.32844 523.333313,2034.5 L523.333313,2029.5 C523.333313,2028.67156 522.66175,2028 521.833313,2028 M534.666687,2024.5 L534.666687,2019.5 C534.666687,2018.67156 533.995125,2018 533.166687,2018 L526.833313,2018 C526.004875,2018 525.333313,2018.67156 525.333313,2019.5 L525.333313,2024.5 C525.333313,2025.32844 526.004875,2026 526.833313,2026 L533.166625,2026 C533.995125,2026 534.666687,2025.32844 534.666687,2024.5 M536.666687,2019.5 L536.666687,2024.5 C536.666687,2025.32844 537.33825,2026 538.166687,2026 L544.5,2026 C545.328437,2026 546,2025.32844 546,2024.5 L546,2019.5 C546,2018.67156 545.328437,2018 544.5,2018 L538.166687,2018 C537.33825,2018 536.666687,2018.67156 536.666687,2019.5 M534.666687,2034.5 L534.666687,2029.5 C534.666687,2028.67156 533.995125,2028 533.166687,2028 L526.833313,2028 C526.004875,2028 525.333313,2028.67156 525.333313,2029.5 L525.333313,2034.5 C525.333313,2035.32844 526.004875,2036 526.833313,2036 L533.166625,2036 C533.995125,2036 534.666687,2035.32844 534.666687,2034.5 M523.333313,2019.5 L523.333313,2024.5 C523.333313,2025.32844 522.66175,2026 521.833313,2026 L515.5,2026 C514.671563,2026 514,2025.32844 514,2024.5 L514,2019.5 C514,2018.67156 514.671563,2018 515.5,2018 L521.833313,2018 C522.66175,2018 523.333313,2018.67156 523.333313,2019.5",
    id: title != null ? "ang-".concat(title) : null
  }))));
});

var Auction = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-584.000000, -1463.000000)"
  }, jsx("path", {
    d: "M615.560687,1475.46014 L614.146499,1474.04595 C613.560686,1473.46014 612.610936,1473.46014 612.025186,1474.04595 L611.671623,1474.39951 L604.600494,1467.32847 L604.954057,1466.97491 C605.53987,1466.3891 605.53987,1465.43935 604.954057,1464.8536 L603.539869,1463.43936 C602.954056,1462.85355 602.004306,1462.85355 601.418555,1463.43936 L593.640364,1471.21752 C593.054551,1471.80333 593.054551,1472.75308 593.640364,1473.33883 L595.054552,1474.75301 C595.640365,1475.33882 596.590116,1475.33882 597.175866,1474.75301 L597.529428,1474.39945 L600.004305,1476.87432 L594.939302,1481.9393 L594.58574,1481.58574 C593.804677,1480.80468 592.538364,1480.80468 591.757301,1481.58574 L584.585797,1488.75735 C583.804734,1489.53841 583.804734,1490.80472 584.585797,1491.58578 L587.414236,1494.4142 C588.195299,1495.19527 589.461612,1495.19527 590.242675,1494.4142 L597.414241,1487.24266 C598.195304,1486.4616 598.195304,1485.19529 597.414241,1484.41423 L597.060678,1484.06067 L602.125681,1478.99569 L604.600557,1481.47056 L604.246994,1481.82412 C603.661181,1482.40993 603.661181,1483.35967 604.246994,1483.94542 L605.661182,1485.35961 C606.246995,1485.94542 607.196746,1485.94542 607.782496,1485.35961 L615.560687,1477.58144 C616.146438,1476.99569 616.146438,1476.04595 615.560687,1475.46014 L615.560687,1475.46014 Z",
    id: title != null ? "auction-".concat(title) : null
  }))));
});

var BeautyEngagement = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "28px",
    height: "32px",
    viewBox: "0 0 28 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-1008.000000, -2009.000000)"
  }, jsx("path", {
    d: "M1027.96312,2029 L1022,2034.96187 L1016.03688,2029 C1011.56875,2029.19375 1008,2032.85 1008,2037.36188 C1008,2039.37112 1009.62881,2041 1011.63812,2041 L1032.36188,2041 C1034.37112,2041 1036,2039.37112 1036,2037.36188 C1036,2032.85 1032.43125,2029.19375 1027.96312,2029 L1027.96312,2029 Z M1017,2019 L1027,2019 L1027,2021 C1027,2023.76144 1024.76138,2026 1022,2026 C1019.23856,2026 1017,2023.76144 1017,2021 L1017,2019 Z M1019.5,2013.47937 C1019.5,2013.30681 1019.63994,2013.16687 1019.8125,2013.16687 L1021.16688,2013.16687 L1021.16688,2011.8125 C1021.16688,2011.63994 1021.30681,2011.5 1021.47938,2011.5 L1022.52062,2011.5 C1022.69325,2011.5 1022.83312,2011.63994 1022.83312,2011.8125 L1022.83312,2013.16687 L1024.1875,2013.16687 C1024.36012,2013.16687 1024.5,2013.30681 1024.5,2013.47937 L1024.5,2014.52063 C1024.5,2014.69319 1024.36012,2014.83313 1024.1875,2014.83313 L1022.83312,2014.83313 L1022.83312,2016.1875 C1022.83312,2016.36006 1022.69325,2016.5 1022.52062,2016.5 L1021.47938,2016.5 C1021.30681,2016.5 1021.16688,2016.36006 1021.16688,2016.1875 L1021.16688,2014.83313 L1019.8125,2014.83313 C1019.63994,2014.83313 1019.5,2014.69319 1019.5,2014.52063 L1019.5,2013.47937 Z M1011.61125,2027 L1016.75875,2027 C1018.16562,2028.23 1019.985,2029 1022,2029 C1024.015,2029 1025.83431,2028.23 1027.24125,2027 L1032.38875,2027 C1032.941,2026.99938 1033.38825,2026.55112 1033.38756,2025.99881 C1033.38756,2025.84337 1033.351,2025.69019 1033.28125,2025.55125 C1032.32931,2023.68563 1031.32625,2021.66188 1030.64681,2019.58 C1030.17375,2018.13063 1030,2016.59938 1030,2015.075 L1030,2012 L1022,2009 L1014,2012 L1014,2015.075 C1014,2016.59938 1013.82812,2018.13063 1013.35438,2019.58 C1012.67375,2021.66188 1011.67062,2023.6875 1010.71875,2025.55125 C1010.47094,2026.04481 1010.67012,2026.64581 1011.16363,2026.89369 C1011.30256,2026.96338 1011.45581,2026.99981 1011.61125,2027 L1011.61125,2027 Z",
    id: title != null ? "beautyEng-".concat(title) : null
  }))));
});

var Bullhorn = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "31px",
    height: "32px",
    viewBox: "0 0 576 512"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"
  }));
});

var Leaf = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "23px",
    viewBox: "0 0 576 512"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"
  }));
});

var Hardhat = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 448 512"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M88 176h272a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8h-8a112 112 0 0 0-68.4-103.2L256 80V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v64l-27.6-55.2A112 112 0 0 0 96 128h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8zm225.6 176h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.4 134.4 0 0 0 0 486.4 25.6 25.6 0 0 0 25.6 512h396.8a25.6 25.6 0 0 0 25.6-25.6A134.4 134.4 0 0 0 313.6 352zM224 320c65.22 0 118.44-48.94 126.39-112H97.61c7.95 63.06 61.17 112 126.39 112z"
  }));
});

var BrokerServices = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-1066.000000, -1836.000000)"
  }, jsx("path", {
    d: "M1094.50012,1850.00014 L1084.00002,1850.00014 L1084.00002,1848.00012 L1079.99998,1848.00012 L1079.99998,1850.00014 L1070.41426,1850.00014 C1069.88363,1850.00014 1069.3755,1850.21076 1068.99987,1850.58577 L1066.29297,1853.29329 C1065.90234,1853.68392 1065.90234,1854.31705 1066.29297,1854.70768 L1068.99987,1857.41458 C1069.37488,1857.78959 1069.88363,1858.00021 1070.41426,1858.00021 L1094.50012,1858.00021 C1095.32826,1858.00021 1096.00014,1857.32833 1096.00014,1856.5002 L1096.00014,1851.50015 C1096.00014,1850.67202 1095.32826,1850.00014 1094.50012,1850.00014 L1094.50012,1850.00014 Z M1079.99998,1867.0003 C1079.99998,1867.55281 1080.44748,1868.00031 1080.99998,1868.00031 L1083.00001,1868.00031 C1083.55252,1868.00031 1084.00002,1867.55281 1084.00002,1867.0003 L1084.00002,1860.00023 L1079.99998,1860.00023 L1079.99998,1867.0003 Z M1097.70703,1841.29318 L1095.00013,1838.58565 C1094.62512,1838.21065 1094.11637,1838.00002 1093.58574,1838.00002 L1084.00002,1838.00002 L1084.00002,1837 C1084.00002,1836.4475 1083.55252,1836 1083.00001,1836 L1080.99999,1836 C1080.44748,1836 1079.99998,1836.4475 1079.99998,1837 L1079.99998,1838.00002 L1069.49988,1838.00002 C1068.67174,1838.00002 1067.99986,1838.6719 1067.99986,1839.50003 L1067.99986,1844.50008 C1067.99986,1845.32822 1068.67174,1846.0001 1069.49988,1846.0001 L1093.58574,1846.0001 C1094.11637,1846.0001 1094.6245,1845.78947 1095.00013,1845.41447 L1097.70703,1842.70757 C1098.09766,1842.31631 1098.09766,1841.68381 1097.70703,1841.29318 L1097.70703,1841.29318 Z",
    id: title != null ? "brokerservices-".concat(title) : null
  }))));
});

var Cars = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "24px",
    viewBox: "0 0 32 24"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-256.000000, -536.000000)"
  }, jsx("g", {
    transform: "translate(256.000000, 536.000000)"
  }, jsx("path", {
    d: "M31.249438,6.5 L27.8235004,6.5 L27.3326253,5.191 C26.7581253,3.6589375 25.7435628,2.3565625 24.3987503,1.4245625 C23.0539377,0.4925625 21.4781877,0 19.8420001,0 L12.1579999,0 C10.5217498,0 8.94606229,0.492625 7.60124975,1.4245625 C6.25637471,2.3565625 5.24187468,3.6589375 4.66737466,5.191 L4.17649965,6.5 L0.750562045,6.5 C0.238624529,6.5 -0.122812982,7.0015 0.0390620233,7.4871875 L0.539062038,8.9871875 C0.641151903,9.29343316 0.927748259,9.5 1.25056206,9.5 L3.05149961,9.5 L3.04824961,9.50875 C1.82637458,10.1933125 1,11.4998125 1,13 L1,16 C1,17.0140625 1.37806206,17.9393125 2,18.6443125 L2,22.5 C2,23.3284375 2.6715621,24 3.5,24 L6.5,24 C7.32843724,24 8,23.3284375 8,22.5 L8,20 L24,20 L24,22.5 C24,23.3284375 24.6715628,24 25.5,24 L28.5,24 C29.3284379,24 30,23.3284375 30,22.5 L30,18.6443125 C30.6219379,17.93925 31,17.014 31,16 L31,13 C31,11.4998125 30.1736254,10.1933125 28.9517504,9.50875 L28.9485004,9.5 L30.7494379,9.5 C31.0722517,9.5 31.3588481,9.29343316 31.460938,8.9871875 L31.960938,7.4871875 C32.122813,7.0015 31.7613755,6.5 31.249438,6.5 Z M8.41268727,6.5955 C8.99487479,5.0430625 10.4999998,4 12.1579999,4 L19.8420001,4 C21.5000002,4 23.0051252,5.0430625 23.5873127,6.5955 L24.4890003,9 L7.51099975,9 L8.41268727,6.5955 Z M5.49999963,16.5 C4.39543715,16.5 3.49999963,15.6045625 3.49999963,14.5 C3.49999963,13.3954375 4.39543715,12.5 5.49999963,12.5 C6.60456222,12.5 8.49999963,14.3954375 8.49999963,15.5 C8.49999963,16.6045625 6.60456222,16.5 5.49999963,16.5 Z M26.5000002,16.5 C25.3954378,16.5 23.5000002,16.6045625 23.5000002,15.5 C23.5000002,14.3954375 25.3954378,12.5 26.5000002,12.5 C27.6045628,12.5 28.5000002,13.3954375 28.5000002,14.5 C28.5000002,15.6045625 27.6045628,16.5 26.5000002,16.5 Z",
    id: title != null ? "cars-".concat(title) : null
  })))));
});

var Clothes = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "29px",
    viewBox: "0 0 32 29"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-904.000000, -422.000000)"
  }, jsx("g", {
    transform: "translate(904.000000, 422.000000)"
  }, jsx("path", {
    d: "M10.2522667,0.975259259 C10.6234667,0.902222222 11.1002667,1.13959259 11.1834667,1.51014815 C11.6517333,3.58418519 13.2325333,5.1662963 15.8917333,5.1662963 C18.552,5.1662963 20.168,3.58418519 20.6341333,1.51014815 C20.7184,1.13959259 21.2112,0.902222222 21.5824,0.975259259 C22.8752,1.22337037 24.2245333,1.5617037 25.4810667,1.99025926 L25.4810667,1.99025926 L31.4224,4.73666667 C31.5962667,4.81722222 31.7456,4.96544444 31.8074667,5.14588889 C31.8704,5.32740741 31.8757333,5.52611111 31.7872,5.69688889 L31.7872,5.69688889 L29.2389333,10.7944444 C29.0874667,11.0994815 28.728,11.2498519 28.4058667,11.151037 L28.4058667,11.151037 L26.6138667,10.614 L26.6138667,27.9925185 C26.6138667,28.5488889 26.1658667,29 25.6122667,29 L25.6122667,29 L6.28106667,29 C5.72853333,29 5.28053333,28.5488889 5.28053333,27.9925185 L5.28053333,27.9925185 L5.28053333,10.614 L3.46826667,11.151037 C3.144,11.2498519 2.78453333,11.0994815 2.63306667,10.7944444 L2.63306667,10.7944444 L0.0730666667,5.69688889 C-0.0154666667,5.52611111 -0.0208,5.32740741 0.0421333333,5.14588889 C0.102933333,4.96544444 0.252266667,4.81722222 0.426133333,4.73666667 L0.426133333,4.73666667 L6.36213333,1.99025926 C7.61973333,1.5617037 8.95946667,1.22337037 10.2522667,0.975259259 Z M18.9114147,0 C19.2683559,0.511627907 18.6272576,4 15.4995356,4 C12.3718136,4 11.7317124,0.511627907 12.0886535,0 C12.0886535,0 13.0827048,0.511627907 15.4995356,0.511627907 C17.9163664,0.511627907 18.9114147,0 18.9114147,0 Z",
    id: title != null ? "clothes-".concat(title) : null
  })))));
});

var Complaint = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "28px",
    viewBox: "0 0 32 28"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-912.000000, -1097.000000)"
  }, jsx("g", {
    transform: "translate(912.000000, 1097.000000)"
  }, jsx("path", {
    d: "M16,0 C7.1625,0 0,5.81875 0,13 C0,16.1 1.3375,18.9375 3.5625,21.16875 C2.78125,24.31875 0.16875,27.125 0.1375,27.15625 C0,27.3 -0.0375,27.5125 0.04375,27.7 C0.125,27.8875 0.3,28 0.5,28 C4.64375,28 7.75,26.0125 9.2875,24.7875 C11.33125,25.55625 13.6,26 16,26 C24.8375,26 32,20.18125 32,13 C32,5.81875 24.8375,0 16,0 Z M16,21 C14.89375,21 14,20.10625 14,19 C14,17.89375 14.89375,17 16,17 C17.10625,17 18,17.89375 18,19 C18,20.10625 17.10625,21 16,21 Z M17.5875,14.1 C17.5375,14.6125 17.10625,15 16.59375,15 L15.40625,15 C14.89375,15 14.4625,14.6125 14.4125,14.1 L13.6125,6.1 C13.55625,5.5125 14.01875,5 14.60625,5 L17.39375,5 C17.9875,5 18.45,5.5125 18.3875,6.1 L17.5875,14.1 Z",
    id: title != null ? "complaint-".concat(title) : null
  })))));
});

var ComputerTvGameConsole = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "26px",
    viewBox: "0 0 32 26"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-880.000000, -1650.000000)"
  }, jsx("path", {
    d: "M883.2,1667.6 L908.8,1667.6 L908.8,1653.2 L883.2,1653.2 L883.2,1667.6 Z M909.6,1650 L882.4,1650 C881.0745,1650 880,1651.0745 880,1652.4 L880,1668.4 C880,1669.7255 881.0745,1670.8 882.4,1670.8 L909.6,1670.8 C910.9255,1670.8 912,1669.7255 912,1668.4 L912,1652.4 C912,1651.0745 910.9255,1650 909.6,1650 L909.6,1650 Z M906,1672.4 L886,1672.4 C885.33725,1672.4 884.8,1672.93725 884.8,1673.6 L884.8,1674.4 C884.8,1675.06275 885.33725,1675.6 886,1675.6 L906,1675.6 C906.66275,1675.6 907.2,1675.06275 907.2,1674.4 L907.2,1673.6 C907.2,1672.93725 906.66275,1672.4 906,1672.4 L906,1672.4 Z",
    id: title != null ? "compTvConsole-".concat(title) : null
  }))));
});

var ConcertAndEvent = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "22px",
    viewBox: "0 0 32 22"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-1114.000000, -1833.000000)"
  }, jsx("path", {
    d: "M1140.66667,1837.88889 C1140.66667,1837.1525 1140.06972,1836.55556 1139.33333,1836.55556 L1120.66667,1836.55556 C1119.93028,1836.55556 1119.33333,1837.1525 1119.33333,1837.88889 L1119.33333,1849.44444 C1119.33333,1850.18083 1119.93028,1850.77778 1120.66667,1850.77778 L1139.33333,1850.77778 C1140.06972,1850.77778 1140.66667,1850.18083 1140.66667,1849.44444 L1140.66667,1837.88889 Z M1143.33333,1843.66667 C1143.33333,1845.13944 1144.52722,1846.33333 1146,1846.33333 L1146,1851.66667 C1146,1853.13944 1144.80611,1854.33333 1143.33333,1854.33333 L1116.66667,1854.33333 C1115.19389,1854.33333 1114,1853.13944 1114,1851.66667 L1114,1846.33333 C1115.47278,1846.33333 1116.66667,1845.13944 1116.66667,1843.66667 C1116.66667,1842.19389 1115.47278,1841 1114,1841 L1114,1835.66667 C1114,1834.19389 1115.19389,1833 1116.66667,1833 L1143.33333,1833 C1144.80611,1833 1146,1834.19389 1146,1835.66667 L1146,1841 C1144.52722,1841 1143.33333,1842.19389 1143.33333,1843.66667 L1143.33333,1843.66667 Z M1121.11111,1849 L1138.88889,1849 L1138.88889,1838.33333 L1121.11111,1838.33333 L1121.11111,1849 Z",
    id: title != null ? "conserts-".concat(title) : null
  }))));
});

var ConsumerRights = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "28px",
    height: "32px",
    viewBox: "0 0 28 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-258.000000, -1831.000000)"
  }, jsx("g", {
    transform: "translate(258.000000, 1831.000000)"
  }, jsx("path", {
    d: "M22,10 L22,8 C22,3.58875 18.4111875,0 14,0 C9.58875,0 6,3.58875 6,8 L6,10 L0,10 L0,27 C0,29.7614375 2.2385625,32 5,32 L23,32 C25.7614375,32 28,29.7614375 28,27 L28,10 L22,10 Z M10,8 C10,5.794375 11.794375,4 14,4 C16.205625,4 18,5.794375 18,8 L18,10 L10,10 L10,8 Z M20,15.5 C19.1715625,15.5 18.5,14.8284375 18.5,14 C18.5,13.1715625 19.1715625,12.5 20,12.5 C20.8284375,12.5 21.5,13.1715625 21.5,14 C21.5,14.8284375 20.8284375,15.5 20,15.5 Z M8,15.5 C7.1715625,15.5 6.5,14.8284375 6.5,14 C6.5,13.1715625 7.1715625,12.5 8,12.5 C8.8284375,12.5 9.5,13.1715625 9.5,14 C9.5,14.8284375 8.8284375,15.5 8,15.5 Z",
    id: title != null ? "consumerRights-".concat(title) : null
  })))));
});

var ContractWorkHouses = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "29px",
    viewBox: "0 0 32 29"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-540.000000, -1643.000000)"
  }, jsx("g", {
    transform: "translate(540.000000, 1643.000000)"
  }, jsx("path", {
    d: "M16.000255,6.38765 L3.85994231,17.0935469 C3.76994411,17.1746564 3.65494641,17.2124335 3.5560595,17.2796543 L3.5560595,27.5538933 C3.5560595,28.0448279 3.95405154,28.4427644 4.44493061,28.4427644 L11.5558995,28.4427644 C12.0467785,28.4427644 12.4447706,28.0448279 12.4447706,27.5538933 L12.4447706,20.4429244 C12.4447706,19.9519898 12.8427626,19.5540533 13.3336417,19.5540533 L18.6668683,19.5540533 C19.157803,19.5540533 19.5557394,19.9519898 19.5557394,20.4429244 L19.5557394,27.5538933 C19.5557394,28.0448279 19.9536759,28.4427644 20.4446105,28.4427644 L27.5555794,28.4427644 C28.046514,28.4427644 28.4444505,28.0448279 28.4444505,27.5538933 L28.4444505,17.2818765 C28.350008,17.2174334 28.237788,17.1807674 28.1522341,17.1041023 L16.000255,6.38765 Z M31.7049409,13.125293 L28.4444505,10.2459062 L28.4444505,2.66550223 C28.4444505,2.17462317 28.046514,1.77663113 27.5555794,1.77663113 L24.000095,1.77663113 C23.5091604,1.77663113 23.1112239,2.17462317 23.1112239,2.66550223 L23.1112239,5.53711146 L17.4863364,0.571655231 C16.6432421,-0.190551744 15.3600456,-0.190551744 14.5169513,0.571655231 L0.295013623,13.1269596 C-0.0702568478,13.4549531 -0.100478465,14.0169418 0.227514973,14.3821567 L0.227792746,14.3824901 L1.4172134,15.7041303 C1.74520684,16.0693452 2.30719559,16.0995668 2.67246606,15.7716289 C2.67257717,15.7715178 2.67263273,15.7714067 2.67274384,15.7713512 L15.412489,4.53379819 C15.7484823,4.23735968 16.2525833,4.23735968 16.5885766,4.53379819 L29.3283217,15.7707956 C29.6934255,16.0989557 30.2554698,16.0690119 30.5835744,15.7038525 L30.5838522,15.7035748 L31.7727173,14.3802679 C32.1004885,14.0149419 32.0701558,13.4531753 31.7049409,13.125293 L31.7049409,13.125293 Z",
    id: title != null ? "contractWorkHouses-".concat(title) : null
  })))));
});

var Craftsman = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-256.000000, -716.000000)"
  }, jsx("g", {
    transform: "translate(256.000000, 716.000000)"
  }, jsx("path", {
    d: "M31.2186321,12.5 C31.8220402,12.5 32.1996569,13.1346843 31.8885448,13.6327467 C30.2544119,16.249496 27.2778581,18 23.8767775,18 C18.7366488,18 14.5660607,14.0016216 14.533879,9.05756029 C14.5015674,4.0918115 18.7217258,0 23.8769073,0 C27.2742896,0 30.2481183,1.74681207 31.8834191,4.35893644 C32.1973211,4.86037381 31.8263873,5.5 31.2185023,5.5 L24.3958383,5.5 L21.8005346,9 L24.3958383,12.5 L31.2186321,12.5 Z M20.0816001,18.312683 L7.08873134,30.82843 C5.46705584,32.3904921 2.83794834,32.3905546 1.21620796,30.82843 C-0.405402654,29.2663054 -0.405402654,26.733681 1.21620796,25.1715564 L14.2086874,12.6562469 C15.2571901,15.2310588 17.4075938,17.3021833 20.0816001,18.312683 Z M6.74777332,26.9999938 C6.74777332,26.1715561 6.05060987,25.4999938 5.19059112,25.4999938 C4.33057236,25.4999938 3.63340891,26.1715561 3.63340891,26.9999938 C3.63340891,27.8284307 4.33057236,28.4999938 5.19059112,28.4999938 C6.05060987,28.4999938 6.74777332,27.8284307 6.74777332,26.9999938 Z",
    id: title != null ? "craftsman-".concat(title) : null
  })))));
});

var DistanceContractLaw = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-584.000000, -1831.000000)"
  }, jsx("g", {
    transform: "translate(584.000000, 1831.000000)"
  }, jsx("path", {
    d: "M21.7140553,9.80645161 C20.7783827,4.04516129 18.5714862,0 16.0032265,0 C13.4349667,0 11.2280702,4.04516129 10.2923977,9.80645161 L21.7140553,9.80645161 Z M9.80842912,16 C9.80842912,17.4322581 9.88586409,18.8064516 10.0213753,20.1290323 L21.9786247,20.1290323 C22.1141359,18.8064516 22.1915709,17.4322581 22.1915709,16 C22.1915709,14.5677419 22.1141359,13.1935484 21.9786247,11.8709677 L10.0213753,11.8709677 C9.88586409,13.1935484 9.80842912,14.5677419 9.80842912,16 Z M30.7610405,9.80645161 C28.9155072,5.42580645 25.17927,2.03870968 20.5654366,0.670967742 C22.1399476,2.8516129 23.2240371,6.13548387 23.7918935,9.80645161 L30.7610405,9.80645161 Z M11.4345634,0.670967742 C6.8271829,2.03870968 3.08449284,5.42580645 1.24541238,9.80645161 L8.21455939,9.80645161 C8.7759629,6.13548387 9.86005243,2.8516129 11.4345634,0.670967742 Z M31.4515023,11.8709677 L24.0500101,11.8709677 C24.1855213,13.2258065 24.2629562,14.6129032 24.2629562,16 C24.2629562,17.3870968 24.1855213,18.7741935 24.0500101,20.1290323 L31.4450494,20.1290323 C31.7999597,18.8064516 32,17.4322581 32,16 C32,14.5677419 31.7999597,13.1935484 31.4515023,11.8709677 Z M7.74349667,16 C7.74349667,14.6129032 7.82093164,13.2258065 7.95644283,11.8709677 L0.554950595,11.8709677 C0.206493245,13.1935484 0,14.5677419 0,16 C0,17.4322581 0.206493245,18.8064516 0.554950595,20.1290323 L7.94998992,20.1290323 C7.82093164,18.7741935 7.74349667,17.3870968 7.74349667,16 Z M10.2923977,22.1935484 C11.2280702,27.9548387 13.4349667,32 16.0032265,32 C18.5714862,32 20.7783827,27.9548387 21.7140553,22.1935484 L10.2923977,22.1935484 Z M20.5718895,31.3290323 C25.17927,29.9612903 28.9219601,26.5741935 30.7674934,22.1935484 L23.7983464,22.1935484 C23.23049,25.8645161 22.1464005,29.1483871 20.5718895,31.3290323 Z M1.24541238,22.1935484 C3.09094576,26.5741935 6.8271829,29.9612903 11.4410163,31.3290323 C9.86650534,29.1483871 8.78241581,25.8645161 8.21455939,22.1935484 L1.24541238,22.1935484 Z",
    id: title != null ? "distanceContractLaw-".concat(title) : null
  })))));
});

var EducationAndCourses = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "20px",
    viewBox: "0 0 32 20"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-860.000000, -2156.000000)"
  }, jsx("g", {
    transform: "translate(697.000000, 2156.000000)"
  }, jsx("g", {
    transform: "translate(163.000000, 0.000000)"
  }, jsx("path", {
    d: "M17.6393189,12.554674 C16.2128133,12.9926758 14.9973086,12.7506748 14.3598061,12.554674 L7.10877777,10.3271653 L6.399775,16.0001875 C6.399775,17.7676944 10.6977918,19.2002 15.9998125,19.2002 C21.3018332,19.2002 25.59985,17.7676944 25.59985,16.0001875 L24.8908472,10.3266653 L17.6393189,12.554674 Z M31.1168716,4.46014242 L17.1698171,0.175125684 C16.4098141,-0.058375228 15.5898109,-0.058375228 14.8303079,0.175125684 L0.882753448,4.46014242 C-0.294251149,4.82164383 -0.294251149,6.37814991 0.882753448,6.73965133 L3.31426295,7.48665424 C2.78076086,8.14615682 2.45275958,8.95065996 2.42025945,9.8316634 C1.93875757,10.1077145 1.59975625,10.6057164 1.59975625,11.2001688 C1.59975625,11.7391709 1.88375736,12.1926726 2.29275896,12.4827238 L1.01625397,18.2266962 C0.905253536,18.7261981 1.28525502,19.2002 1.79675702,19.2002 L4.60226798,19.2002 C5.11426998,19.2002 5.49427146,18.7261981 5.38327103,18.2266962 L4.10676604,12.4827238 C4.51576764,12.1926726 4.79976875,11.7391709 4.79976875,11.2001688 C4.79976875,10.6216665 4.47626749,10.1376646 4.01676569,9.8566635 C4.05476584,9.10566057 4.43876734,8.44165798 5.05126973,8.02065633 L14.8298079,11.0251681 C15.2828097,11.1641686 16.1518131,11.3376693 17.1693171,11.0251681 L31.1168716,6.74015133 C32.2943761,6.37814991 32.2943761,4.82214384 31.1168716,4.46014242 L31.1168716,4.46014242 Z"
  }))))));
});

var ElectricityHeatingContract = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-1134.000000, -1648.000000)"
  }, jsx("g", {
    transform: "translate(1134.000000, 1648.000000)"
  }, jsx("path", {
    d: "M10,20.18165 L10,7.0004 C10,6.4504 9.55,6.0004 9,6.0004 C8.45,6.0004 8,6.4504 8,7.0004 L8,20.18165 C6.8375,20.59415 6,21.6940875 6,23.0004 C6,24.65665 7.34375,26.0004 9,26.0004 C10.65625,26.0004 12,24.65665 12,23.0004 C12,21.6940875 11.1625,20.59415 10,20.18165 L10,20.18165 Z M9,28.0004 C6.24375,28.0004 4,25.7565875 4,23.0004 C4,21.40665 4.7625,19.9440875 6,19.0129 L6,7.0004 C6,5.34415 7.34375,4.0004 9,4.0004 C10.65625,4.0004 12,5.34415 12,7.0004 L12,19.0129 C13.2375,19.9379 14,21.40665 14,23.0004 C14,25.7565875 11.75625,28.0004 9,28.0004 L9,28.0004 Z M16,7.0004 C16,3.13165 12.86875,0.0004 9,0.0004 C5.13125,0.0004 2,3.13165 2,7.0004 L2,17.40665 C0.76875,18.9504 0,20.8754 0,23.0004 C0,27.96915 4.03125,32.0004 9,32.0004 C13.96875,32.0004 18,27.96915 18,23.0004 C18,20.8754 17.23125,18.9440875 16,17.40665 L16,7.0004 Z M26,8.0004 C24.89375,8.0004 24,7.10665 24,6.0004 C24,4.8940875 24.89375,4.0004 26,4.0004 C27.10625,4.0004 28,4.8940875 28,6.0004 C28,7.10665 27.10625,8.0004 26,8.0004 L26,8.0004 Z M26,0.0004 C22.69375,0.0004 20,2.69415 20,6.0004 C20,9.30665 22.69375,12.0004 26,12.0004 C29.30625,12.0004 32,9.30665 32,6.0004 C32,2.69415 29.30625,0.0004 26,0.0004 L26,0.0004 Z",
    id: title != null ? "electricityHeating-".concat(title) : null
  })))));
});

var FurnituresAndDecoration = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "28px",
    height: "32px",
    viewBox: "0 0 28 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-586.000000, -716.000000)"
  }, jsx("g", {
    transform: "translate(586.000000, 716.000000)"
  }, jsx("path", {
    d: "M7.00166922,8 C7.00166922,6.15625 8.01419241,4.5625 9.50172647,3.69375 L9.50172647,16 L12.5017952,16 L12.5017952,3 L15.5018639,3 L15.5018639,16 L18.5019326,16 L18.5019326,3.69375 C19.9894667,4.5625 21.0019898,6.15625 21.0019898,8 L21.0019898,16 L24.0020585,16 L24.0020585,8 C24.0020585,3.58125 20.4207265,0 16.0018753,0 L12.0017837,0 C7.58293253,0 4.00160052,3.58125 4.00160052,8 L4.00160052,16 L7.00166922,16 L7.00166922,8 Z M27.8958977,21.36875 L27.2271324,19.36875 C26.9521261,18.55 26.1896086,18 25.3270889,18 L2.67032003,18 C1.80780027,18 1.04528281,18.55 0.770276514,19.36875 L0.101511199,21.36875 C-0.323498534,22.6625 0.639023508,24 2.00155471,24 L2.00155471,31 C2.00155471,31.55 2.45156502,32 3.00157761,32 L5.00162342,32 C5.55163601,32 6.00164632,31.55 6.00164632,31 L6.00164632,24 L22.0020127,24 L22.0020127,31 C22.0020127,31.55 22.4520231,32 23.0020356,32 L25.0020815,32 C25.552094,32 26.0021044,31.55 26.0021044,31 L26.0021044,24 C27.3646356,24 28.3271576,22.6625 27.8958977,21.36875 Z",
    id: title != null ? "furnitureDeacorations-".concat(title) : null
  })))));
});

var GymAndWorkoutService = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "23px",
    viewBox: "0 0 32 23"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-905.000000, -2019.000000)"
  }, jsx("path", {
    d: "M927.8,2019 L925.4,2019 C924.735,2019 924.2,2019.535 924.2,2020.2 L924.2,2028.6 L917.8,2028.6 L917.8,2020.2 C917.8,2019.535 917.265,2019 916.6,2019 L914.2,2019 C913.535,2019 913,2019.535 913,2020.2 L913,2040.2 C913,2040.865 913.535,2041.4 914.2,2041.4 L916.6,2041.4 C917.265,2041.4 917.8,2040.865 917.8,2040.2 L917.8,2031.8 L924.2,2031.8 L924.2,2040.2 C924.2,2040.865 924.735,2041.4 925.4,2041.4 L927.8,2041.4 C928.465,2041.4 929,2040.865 929,2040.2 L929,2020.2 C929,2019.535 928.465,2019 927.8,2019 M936.6,2028.6 L935.4,2028.6 L935.4,2023.4 C935.4,2022.735 934.865,2022.2 934.2,2022.2 L931.8,2022.2 C931.135,2022.2 930.6,2022.735 930.6,2023.4 L930.6,2037 C930.6,2037.665 931.135,2038.2 931.8,2038.2 L934.2,2038.2 C934.865,2038.2 935.4,2037.665 935.4,2037 L935.4,2031.8 L936.6,2031.8 C936.82,2031.8 937,2031.62 937,2031.4 L937,2029 C937,2028.78 936.82,2028.6 936.6,2028.6 M910.2,2022.2 L907.8,2022.2 C907.135,2022.2 906.6,2022.735 906.6,2023.4 L906.6,2028.6 L905.4,2028.6 C905.18,2028.6 905,2028.78 905,2029 L905,2031.4 C905,2031.62 905.18,2031.8 905.4,2031.8 L906.6,2031.8 L906.6,2037 C906.6,2037.665 907.135,2038.2 907.8,2038.2 L910.2,2038.2 C910.865,2038.2 911.4,2037.665 911.4,2037 L911.4,2023.4 C911.4,2022.735 910.865,2022.2 910.2,2022.2",
    id: title != null ? "legDay-".concat(title) : null
  }))));
});

var Hairdresser = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-747.000000, -2158.000000)"
  }, jsx("g", {
    transform: "translate(747.000000, 2158.000000)"
  }, jsx("path", {
    d: "M6.85714286,27.4285714 C5.59714286,27.4285714 4.57142857,26.4028571 4.57142857,25.1428571 C4.57142857,23.8828571 5.59714286,22.8571429 6.85714286,22.8571429 C8.11714286,22.8571429 9.14285714,23.8828571 9.14285714,25.1428571 C9.14285714,26.4028571 8.11714286,27.4285714 6.85714286,27.4285714 L6.85714286,27.4285714 Z M6.85714286,9.14285714 C5.59714286,9.14285714 4.57142857,8.11714286 4.57142857,6.85714286 C4.57142857,5.59714286 5.59714286,4.57142857 6.85714286,4.57142857 C8.11714286,4.57142857 9.14285714,5.59714286 9.14285714,6.85714286 C9.14285714,8.11714286 8.11714286,9.14285714 6.85714286,9.14285714 L6.85714286,9.14285714 Z M19.8614286,16 L31.7485714,4.11214286 C32.0835714,3.77714286 32.0835714,3.23428571 31.7485714,2.9 C29.4057143,0.557142857 25.6064286,0.557142857 23.2635714,2.9 L15.0128571,11.1514286 L13.2371429,9.37571429 C13.545,8.59571429 13.7142857,7.74642857 13.7142857,6.85714286 C13.7142857,3.07 10.6442857,0 6.85714286,0 C3.07,0 9.57456336e-13,3.07 9.57456336e-13,6.85714286 C9.57456336e-13,10.6442857 3.07,13.7142857 6.85714286,13.7142857 C7.18142857,13.7142857 7.49928571,13.6914286 7.81142857,13.6478571 L10.1635714,16 L7.81142857,18.3521429 C7.49928571,18.3085714 7.18071429,18.2857143 6.85714286,18.2857143 C3.07,18.2857143 9.57456336e-13,21.3557143 9.57456336e-13,25.1428571 C9.57456336e-13,28.93 3.07,32 6.85714286,32 C10.6442857,32 13.7142857,28.93 13.7142857,25.1428571 C13.7142857,24.2535714 13.545,23.4042857 13.2371429,22.6242857 L15.0128571,20.8485714 L23.2635714,29.1 C25.6064286,31.4428571 29.4057143,31.4428571 31.7485714,29.1 C32.0835714,28.7657143 32.0835714,28.2228571 31.7485714,27.8878571 L19.8614286,16 Z",
    id: title != null ? "hairdresser-".concat(title) : null
  })))));
});

var Insurance = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "34px",
    height: "36px",
    viewBox: "0 0 34 36"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M16.8820031,31.3786969 L16.8749719,4.58963438 L29.2430109,9.74354062 C29.0109094,20.3888531 23.4702844,28.1021344 16.8820031,31.3786969 M31.6757531,5.88338437 L18.1757531,0.258384375 C17.3452922,-0.086146875 16.4118234,-0.086146875 15.5812219,0.258384375 L2.08122188,5.88338437 C0.822698438,6.40369687 -2.8125e-05,7.63416562 -2.8125e-05,8.99822812 C-2.8125e-05,22.9552594 8.05075312,32.6021344 15.5741906,35.7380719 C16.4038781,36.0826031 17.3390344,36.0826031 18.1687922,35.7380719 C24.1945031,33.2279156 33.7499719,24.5583844 33.7499719,8.99822812 C33.7499719,7.63416562 32.9273156,6.40369687 31.6757531,5.88338437"
  }));
});

var InternetFiberBroadband = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "23px",
    viewBox: "0 0 32 23"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-944.000000, -1652.000000)"
  }, jsx("g", {
    transform: "translate(944.000000, 1652.000000)"
  }, jsx("path", {
    d: "M26.133455,11.82051 C20.370455,6.72401 11.622955,6.72951 5.866455,11.82051 C5.521455,12.12551 5.510455,12.65496 5.837955,12.97796 L7.559955,14.67751 C7.859955,14.97351 8.342955,14.99351 8.662455,14.71746 C12.859955,11.08901 19.149455,11.09701 23.336955,14.71746 C23.656455,14.99351 24.139455,14.97401 24.439455,14.67751 L26.161505,12.97796 C26.489455,12.65496 26.477955,12.12501 26.133455,11.82051 M15.999955,16.00001 C14.232455,16.00001 12.799955,17.43251 12.799955,19.20001 C12.799955,20.96746 14.232455,22.40001 15.999955,22.40001 C17.767455,22.40001 19.199955,20.96746 19.199955,19.20001 C19.199955,17.43251 17.767455,16.00001 15.999955,16.00001 M31.745455,6.14401 C22.886955,-2.04949 9.109455,-2.04649 0.254455,6.14401 C-0.078545,6.45201 -0.085045,6.97351 0.236955,7.29301 L1.948955,8.99151 C2.255955,9.29651 2.749955,9.30301 3.068955,9.01051 C10.364955,2.32651 21.633955,2.32501 28.931455,9.01051 C29.250455,9.30301 29.744455,9.29601 30.051455,8.99151 L31.763455,7.29301 C32.084955,6.97351 32.078455,6.45201 31.745455,6.14401",
    id: title != null ? "fiberbroadband-".concat(title) : null
  })))));
});

var LoanSaveInvest = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "29px",
    viewBox: "0 0 32 29"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-1060.000000, -2013.000000)"
  }, jsx("path", {
    d: "M1074.22097,2018.33333 L1081.33208,2018.33333 C1081.63208,2018.33333 1081.92653,2018.35556 1082.21541,2018.37778 C1082.21541,2018.36111 1082.22097,2018.35 1082.22097,2018.33333 C1082.22097,2015.38889 1079.83208,2013 1076.88764,2013 C1073.94319,2013 1071.5543,2015.38889 1071.5543,2018.33333 C1071.5543,2018.45 1071.58208,2018.56111 1071.58764,2018.67778 C1072.43208,2018.46111 1073.30986,2018.33333 1074.22097,2018.33333 M1083.99875,2029 C1083.50986,2029 1083.10986,2028.6 1083.10986,2028.11111 C1083.10986,2027.62222 1083.50986,2027.22222 1083.99875,2027.22222 C1084.48764,2027.22222 1084.88764,2027.62222 1084.88764,2028.11111 C1084.88764,2028.6 1084.48764,2029 1083.99875,2029 M1091.10986,2025.44444 L1089.47097,2025.44444 C1088.98208,2024.33333 1088.27097,2023.35 1087.39319,2022.52778 L1088.44319,2018.33333 L1086.66541,2018.33333 C1085.03208,2018.33333 1083.58764,2019.08333 1082.60986,2020.23889 C1082.18764,2020.17778 1081.77097,2020.11111 1081.33208,2020.11111 L1074.22097,2020.11111 C1069.92097,2020.11111 1066.33764,2023.16667 1065.50986,2027.22222 L1063.10986,2027.22222 C1062.28764,2027.22222 1061.63764,2026.47222 1061.8043,2025.62222 C1061.92653,2024.98889 1062.52097,2024.55556 1063.16541,2024.55556 L1063.22097,2024.55556 C1063.4043,2024.55556 1063.5543,2024.40556 1063.5543,2024.22222 L1063.5543,2023.11111 C1063.5543,2022.92778 1063.4043,2022.77778 1063.22097,2022.77778 C1061.63764,2022.77778 1060.22653,2023.91111 1060.02653,2025.47778 C1059.78208,2027.37778 1061.25986,2029 1063.10986,2029 L1065.33208,2029 C1065.33208,2031.9 1066.74319,2034.45 1068.88764,2036.07222 L1068.88764,2040.55556 C1068.88764,2041.04444 1069.28764,2041.44444 1069.77653,2041.44444 L1073.33208,2041.44444 C1073.82097,2041.44444 1074.22097,2041.04444 1074.22097,2040.55556 L1074.22097,2037.88889 L1081.33208,2037.88889 L1081.33208,2040.55556 C1081.33208,2041.04444 1081.73208,2041.44444 1082.22097,2041.44444 L1085.77653,2041.44444 C1086.26541,2041.44444 1086.66541,2041.04444 1086.66541,2040.55556 L1086.66541,2036.07222 C1087.32097,2035.57778 1087.9043,2034.99444 1088.4043,2034.33333 L1091.10986,2034.33333 C1091.59875,2034.33333 1091.99875,2033.93333 1091.99875,2033.44444 L1091.99875,2026.33333 C1091.99875,2025.84444 1091.59875,2025.44444 1091.10986,2025.44444",
    id: title != null ? "loanSaveInvest-".concat(title) : null
  }))));
});

var LotteryAndGames = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-1002.000000, -1647.000000)"
  }, jsx("g", {
    transform: "translate(1002.000000, 1647.000000)"
  }, jsx("path", {
    d: "M17.0245998,0.41233893 C16.4435767,-0.13744631 15.5376806,-0.13744631 14.9566576,0.41233893 C11.957829,3.2737212 3.34869192,11.5579852 1.99921906,13.0511519 C0.793440062,14.3818821 0,16.1374463 0,18.0866849 C0,22.4912144 3.42991019,25.971105 7.71573604,25.9898477 C10.0085904,25.9960953 12.070285,25.0089809 13.4947286,23.4345959 C13.4884811,25.7212027 13.4447481,26.7020695 10.2210074,28.1452558 C9.34010152,28.538852 8.8340492,29.4947286 9.05271378,30.4318626 C9.25888325,31.3377587 10.071066,31.9812573 11.0019524,31.9812573 L20.9605623,31.9812573 C21.928934,31.9812573 22.7848497,31.3065209 22.9660289,30.3568918 C23.1409606,29.4447481 22.666146,28.5326045 21.8164779,28.1577509 C18.5927372,26.7208122 18.5177665,25.7774307 18.5052714,23.4345959 C19.9672003,25.0464662 22.0976181,26.0460758 24.4591956,25.9836002 C28.6762983,25.8773916 32,22.453729 32,18.2366263 C32,16.2249121 31.2377977,14.4131199 30.0007809,13.0449043 C28.638813,11.5579852 20.0296759,3.2737212 17.0245998,0.41233893",
    id: title != null ? "winBig-".concat(title) : null
  })))));
});

var MobilePhone = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "20px",
    height: "32px",
    viewBox: "0 0 20 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-814.000000, -2157.000000)"
  }, jsx("path", {
    d: "M831,2180.25 C831,2180.6625 830.6625,2181 830.25,2181 L817.75,2181 C817.3375,2181 817,2180.6625 817,2180.25 L817,2160.75 C817,2160.3375 817.3375,2160 817.75,2160 L830.25,2160 C830.6625,2160 831,2160.3375 831,2160.75 L831,2180.25 Z M824,2187 C822.89375,2187 822,2186.10625 822,2185 C822,2183.89375 822.89375,2183 824,2183 C825.10625,2183 826,2183.89375 826,2185 C826,2186.10625 825.10625,2187 824,2187 L824,2187 Z M831,2157 L817,2157 C815.34375,2157 814,2158.34375 814,2160 L814,2186 C814,2187.65625 815.34375,2189 817,2189 L831,2189 C832.65625,2189 834,2187.65625 834,2186 L834,2160 C834,2158.34375 832.65625,2157 831,2157 L831,2157 Z",
    id: title != null ? "mobilephone-".concat(title) : null
  }))));
});

var MoveAndCleaningService = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-1086.000000, -1645.000000)"
  }, jsx("g", {
    transform: "translate(697.000000, 1645.000000)"
  }, jsx("path", {
    d: "M394.001378,6.00125396 C395.658085,6.00125396 397.002205,4.65713354 397.002205,3.00042698 C397.002205,1.34372042 395.664337,-0.0004 394.001378,-0.0004 C392.33842,-0.0004 391.000551,1.34372042 391.000551,3.00042698 C391.000551,4.65713354 392.344672,6.00125396 394.001378,6.00125396 L394.001378,6.00125396 Z M407.042472,29.0013424 C406.492321,29.0013424 406.042197,28.5512184 406.042197,28.0010668 C406.042197,27.4509152 406.492321,27.0007911 407.042472,27.0007911 C407.592624,27.0007911 408.042748,27.4509152 408.042748,28.0010668 C408.042748,28.5512184 407.598876,29.0013424 407.042472,29.0013424 L407.042472,29.0013424 Z M420.471173,23.3685401 C420.402404,23.099716 420.127328,22.943423 419.858504,23.0121919 L410.224599,25.5941535 C409.61193,24.7876812 408.711682,24.2250262 407.667645,24.0624814 L403.954121,10.2086635 C403.885352,9.93983938 403.610276,9.7835463 403.341452,9.85231526 L401.40967,10.3712083 C401.140846,10.4399772 400.984553,10.715053 401.053322,10.9838771 L401.859794,13.9972075 L399.421622,13.9972075 L397.339798,10.1336428 C396.645857,8.81452926 395.289233,7.99555356 393.795071,7.99555356 L392.000827,7.99555356 C390.34412,7.99555356 389,9.33967398 389,10.9963805 L389,17.4356551 C389,18.6047273 389.512641,19.7112822 390.400386,20.4739924 L395.151695,24.543864 L396.033188,30.3267077 C396.095705,30.6830559 396.664612,32.2459866 398.333822,31.9709108 C399.421622,31.7896108 400.159325,30.7580766 399.978025,29.6702768 L399.096532,23.8874331 C398.940239,22.9621781 398.465108,22.1181955 397.752412,21.5055267 L395.001654,19.1486272 L395.001654,14.2535282 L397.002205,17.9983102 L402.928839,17.9983102 L404.735586,24.7376674 C403.710304,25.4628673 403.035118,26.6506946 403.035118,28.0010668 C403.035118,30.2079249 404.829362,32.0021694 407.036221,32.0021694 C409.080534,32.0021694 410.743492,30.4704973 410.987309,28.4949529 L420.627466,25.9129913 C420.89629,25.8442224 421.052583,25.5691466 420.983814,25.3003225 L420.471173,23.3685401 Z M389,30.0016181 C389,31.108173 389.893996,32.0021694 391.000551,32.0021694 C392.107106,32.0021694 393.001103,31.108173 393.001103,30.0016181 L393.001103,25.3440845 C392.000827,24.4875985 389.031259,21.9306439 389,21.8993852 L389,30.0016181 Z M409.699454,22.537061 C409.843244,23.0684574 410.393396,23.3872953 410.924792,23.2435057 L418.239308,21.2867164 C418.770704,21.1429268 419.089542,20.5927752 418.945753,20.0613787 L416.982712,12.7531147 C416.838922,12.2217182 416.28877,11.9028804 415.757374,12.04667 L408.442858,14.0034592 C407.911462,14.1472489 407.592624,14.6974005 407.736413,15.2287969 L409.699454,22.537061 Z",
    id: title != null ? "movecleaningservices-".concat(title) : null
  })))));
});

var NotDefinedPicture = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "24px",
    viewBox: "0 0 32 24"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-961.000000, -2015.000000)"
  }, jsx("path", {
    d: "M967,2033 L987,2033 L987,2028 L981.530313,2022.53031 C981.237437,2022.23744 980.762563,2022.23744 980.469625,2022.53031 L973,2030 L970.530313,2027.53031 C970.237438,2027.23744 969.762562,2027.23744 969.469625,2027.53031 L967,2030 L967,2033 Z M969,2020.5 C967.619312,2020.5 966.5,2021.61931 966.5,2023 C966.5,2024.38069 967.619312,2025.5 969,2025.5 C970.380688,2025.5 971.5,2024.38069 971.5,2023 C971.5,2021.61931 970.380688,2020.5 969,2020.5 L969,2020.5 Z M989.625,2036 L964.375,2036 C964.167937,2036 964,2035.83206 964,2035.625 L964,2018.375 C964,2018.16794 964.167937,2018 964.375,2018 L989.625,2018 C989.832063,2018 990,2018.16794 990,2018.375 L990,2035.625 C990,2035.83206 989.832063,2036 989.625,2036 L989.625,2036 Z M990,2015 L964,2015 C962.343125,2015 961,2016.34313 961,2018 L961,2036 C961,2037.65687 962.343125,2039 964,2039 L990,2039 C991.656875,2039 993,2037.65687 993,2036 L993,2018 C993,2016.34313 991.656875,2015 990,2015 L990,2015 Z",
    id: title != null ? "undefinedpicture-".concat(title) : null
  }))));
});

var Pets = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "28px",
    viewBox: "0 0 32 28"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-697.000000, -2158.000000)"
  }, jsx("g", {
    transform: "translate(697.000000, 2158.000000)"
  }, jsx("path", {
    d: "M19.8716424,9.89424093 C21.8016229,10.4019992 23.9648978,8.6186074 24.7034553,5.91014737 C25.4420751,3.20168733 24.4763987,0.594903701 22.5464806,0.0865216343 C20.6164377,-0.421860432 18.4532252,1.36215516 17.7146677,4.0706152 C16.9760479,6.77907524 17.9417243,9.38648265 19.8716424,9.89424093 M29.619541,8.06406549 C27.8030264,7.62991345 25.8050537,9.02967953 25.155697,11.191083 C24.5070264,13.3524865 25.4532408,15.4565021 27.2697555,15.8906542 C29.0862077,16.3248062 31.084118,14.9250402 31.7334748,12.7636366 C32.3822701,10.6022331 31.4359933,8.49821754 29.619541,8.06406549 M12.0668861,9.89424093 C13.9968666,9.38648265 14.9624806,6.77907524 14.2239231,4.0706152 C13.485428,1.36215516 11.3220907,-0.42123665 9.39217261,0.0865216343 C7.46219211,0.594279919 6.49657807,3.20168733 7.2350732,5.91014737 C7.9736307,8.6186074 10.1375293,10.402623 12.0668861,9.89424093 M6.78227008,11.1904593 C6.13347476,9.02905575 4.13487827,7.62928967 2.3184884,8.06344171 C0.501973782,8.49759376 -0.444240643,10.6016094 0.204429923,12.7630129 C0.853162866,14.9244164 2.85175936,16.3242448 4.66827398,15.8900928 C6.48472622,15.4558784 7.43100302,13.3518628 6.78227008,11.1904593 M15.9692642,11.977048 C11.0158139,11.977048 3.99265604,19.6345918 3.99265604,24.468276 C3.99265604,26.6453364 5.6650771,27.9458589 8.46772817,27.9458589 C11.5142779,27.9458589 13.5259738,26.3814144 15.9692642,26.3814144 C18.4338256,26.3814144 20.4511356,27.9458589 23.4708627,27.9458589 C26.2735761,27.9458589 27.9458724,26.6453364 27.9458724,24.468276 C27.9458724,19.6345918 20.9227769,11.977048 15.9692642,11.977048",
    id: title != null ? "pets-".concat(title) : null
  })))));
});

var PurchaseFromPrivate = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-912.000000, -1463.000000)"
  }, jsx("g", {
    transform: "translate(912.000000, 1463.000000)"
  }, jsx("path", {
    d: "M16,18 C20.96875,18 25,13.96875 25,9 C25,4.03125 20.96875,0 16,0 C11.03125,0 7,4.03125 7,9 C7,13.96875 11.03125,18 16,18 Z M24,20 L20.55625,20 C19.16875,20.6375 17.625,21 16,21 C14.375,21 12.8375,20.6375 11.44375,20 L8,20 C3.58125,20 0,23.58125 0,28 L0,29 C0,30.65625 1.34375,32 3,32 L29,32 C30.65625,32 32,30.65625 32,29 L32,28 C32,23.58125 28.41875,20 24,20 Z",
    id: title != null ? "privatepurchase-".concat(title) : null
  })))));
});

var Receipt = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "23px",
    height: "32px",
    viewBox: "0 0 23 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-261.000000, -1095.000000)"
  }, jsx("g", {
    transform: "translate(272.500000, 1111.000000) scale(-1, 1) translate(-272.500000, -1111.000000) translate(261.000000, 1095.000000)"
  }, jsx("path", {
    d: "M21.4666667,0.201662104 L19.1666667,3.00136755 L15.9083333,0.201662104 C15.5682667,-0.0670781143 15.0984,-0.0670781143 14.7583333,0.201662104 L11.5,3.00136755 L8.24166667,0.201662104 C7.90159999,-0.0670781143 7.43173335,-0.0670781143 7.09166667,0.201662104 L3.83333333,3.00136755 L1.53333333,0.201662104 C0.8984375,-0.292035956 0,0.176664733 0,1.00157795 L0,30.9984221 C0,31.8233353 0.8984375,32.292036 1.53333333,31.7983379 L3.83333333,28.9986324 L7.09166667,31.7983379 C7.43173335,32.0670781 7.90159999,32.0670781 8.24166667,31.7983379 L11.5,28.9986324 L14.7583333,31.7983379 C15.0984,32.0670781 15.5682667,32.0670781 15.9083333,31.7983379 L19.1666667,28.9986324 L21.4666667,31.7983379 C22.0955729,32.292036 23,31.8233353 23,30.9984221 L23,1.00157795 C23,0.176664733 22.1015625,-0.292035956 21.4666667,0.201662104 Z M19.1666667,22.4993162 C19.1666667,22.7742873 18.9510417,22.9992636 18.6875,22.9992636 L4.3125,22.9992636 C4.04895833,22.9992636 3.83333333,22.7742873 3.83333333,22.4993162 L3.83333333,21.4994214 C3.83333333,21.2244503 4.04895833,20.999474 4.3125,20.999474 L18.6875,20.999474 C18.9510417,20.999474 19.1666667,21.2244503 19.1666667,21.4994214 L19.1666667,22.4993162 Z M19.1666667,16.4999474 C19.1666667,16.7749185 18.9510417,16.9998948 18.6875,16.9998948 L4.3125,16.9998948 C4.04895833,16.9998948 3.83333333,16.7749185 3.83333333,16.4999474 L3.83333333,15.5000526 C3.83333333,15.2250815 4.04895833,15.0001052 4.3125,15.0001052 L18.6875,15.0001052 C18.9510417,15.0001052 19.1666667,15.2250815 19.1666667,15.5000526 L19.1666667,16.4999474 Z M19.1666667,10.5005786 C19.1666667,10.7755497 18.9510417,11.000526 18.6875,11.000526 L4.3125,11.000526 C4.04895833,11.000526 3.83333333,10.7755497 3.83333333,10.5005786 L3.83333333,9.50068378 C3.83333333,9.22571271 4.04895833,9.00073637 4.3125,9.00073637 L18.6875,9.00073637 C18.9510417,9.00073637 19.1666667,9.22571271 19.1666667,9.50068378 L19.1666667,10.5005786 Z",
    id: title != null ? "receipt-".concat(title) : null
  })))));
});

var SalesLaw = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "25px",
    viewBox: "0 0 32 25"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-912.000000, -1835.000000)"
  }, jsx("g", {
    transform: "translate(912.000000, 1835.000000)"
  }, jsx("path", {
    d: "M12.8,16.40625 L12.799,16.40625 C12.799,15.6162109 12.866,15.9799805 8.5465,7.54345703 C7.664,5.8203125 5.137,5.81689453 4.253,7.54345703 C-0.103,16.0522461 0.001,15.6411133 0.001,16.40625 L0,16.40625 C0,18.5634766 2.8655,20.3125 6.4,20.3125 C9.9345,20.3125 12.8,18.5634766 12.8,16.40625 Z M6.4,8.59375 L10,15.625 L2.8,15.625 L6.4,8.59375 Z M31.999,16.40625 C31.999,15.6162109 32.066,15.9799805 27.7465,7.54345703 C26.864,5.8203125 24.337,5.81689453 23.453,7.54345703 C19.097,16.0522461 19.201,15.6411133 19.201,16.40625 L19.2,16.40625 C19.2,18.5634766 22.0655,20.3125 25.6,20.3125 C29.1345,20.3125 32,18.5634766 32,16.40625 L31.999,16.40625 Z M22,15.625 L25.6,8.59375 L29.2,15.625 L22,15.625 Z M26.4,21.875 L17.6,21.875 L17.6,7.48291016 C18.7755,6.98046875 19.658,5.94580078 19.9195,4.6875 L26.4,4.6875 C26.842,4.6875 27.2,4.33789062 27.2,3.90625 L27.2,2.34375 C27.2,1.91210937 26.842,1.5625 26.4,1.5625 L19.182,1.5625 C18.452,0.619140625 17.3045,0 16,0 C14.6955,0 13.548,0.619140625 12.818,1.5625 L5.6,1.5625 C5.158,1.5625 4.8,1.91210937 4.8,2.34375 L4.8,3.90625 C4.8,4.33789062 5.158,4.6875 5.6,4.6875 L12.0805,4.6875 C12.342,5.9453125 13.224,6.98046875 14.4,7.48291016 L14.4,21.875 L5.6,21.875 C5.158,21.875 4.8,22.2246094 4.8,22.65625 L4.8,24.21875 C4.8,24.6503906 5.158,25 5.6,25 L26.4,25 C26.842,25 27.2,24.6503906 27.2,24.21875 L27.2,22.65625 C27.2,22.2246094 26.842,21.875 26.4,21.875 Z",
    id: title != null ? "salesLaw-".concat(title) : null
  })))));
});

var Telemarketing = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "28px",
    viewBox: "0 0 32 28"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-256.000000, -1465.000000)"
  }, jsx("g", {
    transform: "translate(256.000000, 1465.000000)"
  }, jsx("path", {
    d: "M23.1518626,10.015625 C22.4397116,8.76920808 21.1142605,8 19.6787436,8 L12.3212564,8 C10.8857395,8 9.56028835,8.76920808 8.84813739,10.015625 L2.2637738,21.53875 C2.09097114,21.8409881 2.00002426,22.1830995 2.00002426,22.53125 L2.00002426,26 C2.00002426,27.1045695 2.89545321,28 4.00002426,28 L27.9999792,28 C29.1045468,28 29.9999757,27.1045695 29.9999757,26 L29.9999757,22.53125 C29.9999757,22.1830995 29.9090289,21.8409881 29.7362262,21.53875 L23.1518626,10.015625 Z M16.0000078,22 C13.5147229,22 11.5000078,19.9852814 11.5000078,17.5 C11.5000078,15.0147186 13.5147229,13 16.0000078,13 C18.4852771,13 20.4999922,15.0147186 20.4999922,17.5 C20.4999922,19.9852814 18.4852771,22 16.0000078,22 Z M31.6362229,5.6875 C27.2974804,2.0625 21.7112401,0 16,0 C10.2887599,0 4.70251957,2.0625 0.363777092,5.6875 C0.131632794,5.88405792 -0.00155705051,6.17332297 1.37391112e-05,6.4775 L1.37391112e-05,10 C1.37391112e-05,10.5522847 0.447742197,11 1.00002599,11 L5.3818934,11 C5.7607214,11 6.10697809,10.7857738 6.27626685,10.446875 L8.00001374,6 C10.4937595,4.92 13.2000049,4.5 16,4.5 C18.7981202,4.5 21.5043655,4.92 23.9999861,6 L25.7237332,10.446875 C25.8930219,10.7857738 26.2392786,11 26.6181066,11 L30.999974,11 C31.5522578,11 31.9999863,10.5522847 31.9999863,10 L31.9999863,6.4775 C32.0015571,6.17332297 31.8683672,5.88405792 31.6362229,5.6875 L31.6362229,5.6875 Z",
    id: title != null ? "telemarketing-".concat(title) : null
  })))));
});

var Travel = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "29px",
    viewBox: "0 0 32 29"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-584.000000, -533.000000)"
  }, jsx("g", {
    transform: "translate(584.000000, 533.000000)"
  }, jsx("path", {
    d: "M6,29 L26,29 L26,6.21428571 L24,6.21428571 L24,3.10714286 C24,1.39109375 22.656875,0 21,0 L11,0 C9.343125,0 8,1.39109375 8,3.10714286 L8,6.21428571 L6,6.21428571 L6,29 Z M12,4.14285714 L20,4.14285714 L20,6.21428571 L12,6.21428571 L12,4.14285714 Z M32,9.32142857 L32,25.8928571 C32,27.6089062 30.656875,29 29,29 L28,29 L28,6.21428571 L29,6.21428571 C30.656875,6.21428571 32,7.60537946 32,9.32142857 Z M4,29 L3,29 C1.343125,29 0,27.6089062 0,25.8928571 L0,9.32142857 C0,7.60537946 1.343125,6.21428571 3,6.21428571 L4,6.21428571 L4,29 Z",
    id: title != null ? "travel-".concat(title) : null
  })))));
});

var WhiteGoods = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "25px",
    height: "32px",
    viewBox: "0 0 25 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-915.000000, -532.000000)"
  }, jsx("g", {
    transform: "translate(915.000000, 532.000000)"
  }, jsx("path", {
    d: "M16.6666667,9 L16.6666667,2 C16.6666667,0.8954375 17.5994141,0 18.75,0 C19.9005859,0 20.8333333,0.8954375 20.8333333,2 L20.8333333,9 L16.6666667,9 Z M23.9583333,10 L1.04166667,10 C0.466341146,10 0,10.4476875 0,11 L0,13 C0,13.5523125 0.466341146,14 1.04166667,14 L2.08333333,14 L2.08333333,16 C2.08333333,20.837875 5.66204427,24.8731875 10.4166667,25.79975 L10.4166667,32 L14.5833333,32 L14.5833333,25.79975 C19.3379557,24.8731875 22.9166667,20.837875 22.9166667,16 L22.9166667,14 L23.9583333,14 C24.5336589,14 25,13.5523125 25,13 L25,11 C25,10.4476875 24.5336589,10 23.9583333,10 Z M8.33333333,9 L8.33333333,2 C8.33333333,0.8954375 7.40058594,0 6.25,0 C5.09941406,0 4.16666667,0.8954375 4.16666667,2 L4.16666667,9 L8.33333333,9 Z",
    id: title != null ? "whitegoods-".concat(title) : null
  })))));
});

var Withdrawal = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "20px",
    viewBox: "0 0 32 20"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    stroke: "none",
    strokeWidth: "1"
  }, jsx("g", {
    transform: "translate(-584.000000, -1101.000000)"
  }, jsx("g", {
    transform: "translate(584.000000, 1101.000000)"
  }, jsx("path", {
    d: "M21.735,0 L17.44,0 C17.04,0 16.655,0.156193344 16.36,0.437341362 L11.445,5.12314167 C11.44,5.12834811 11.435,5.138761 11.43,5.14396745 C10.6,5.95617284 10.615,7.25257759 11.325,8.05957653 C11.96,8.78327235 13.295,8.97591081 14.13,8.20015054 C14.135,8.19494409 14.145,8.19494409 14.15,8.18973765 L18.145,4.37862007 C18.47,4.07143982 18.98,4.0922656 19.275,4.43068451 C19.575,4.76910342 19.55,5.29495435 19.225,5.60734103 L17.92,6.85168134 L25.2,13.0056991 C25.345,13.1306538 25.475,13.2660213 25.595,13.4065953 L25.595,3.33212466 L22.865,0.48940581 C22.57,0.177019123 22.16,0 21.735,0 Z M27.2,3.34253755 L27.2,14.9997674 C27.2,15.9213082 27.915,16.6658298 28.8,16.6658298 L32,16.6658298 L32,3.34253755 L27.2,3.34253755 Z M29.6,14.9997674 C29.16,14.9997674 28.8,14.6249034 28.8,14.1667363 C28.8,13.7085691 29.16,13.3337051 29.6,13.3337051 C30.04,13.3337051 30.4,13.7085691 30.4,14.1667363 C30.4,14.6249034 30.04,14.9997674 29.6,14.9997674 Z M0,16.6606233 L3.2,16.6606233 C4.085,16.6606233 4.8,15.9161017 4.8,14.994561 L4.8,3.34253755 L0,3.34253755 L0,16.6606233 Z M2.4,13.3337051 C2.84,13.3337051 3.2,13.7085691 3.2,14.1667363 C3.2,14.6249034 2.84,14.9997674 2.4,14.9997674 C1.96,14.9997674 1.6,14.6249034 1.6,14.1667363 C1.6,13.7033627 1.96,13.3337051 2.4,13.3337051 Z M24.195,14.3021038 L16.73,7.99189275 L15.23,9.42366506 C13.745,10.8346116 11.47,10.699244 10.145,9.19458149 C8.8,7.66388673 8.905,5.29495435 10.365,3.89962715 L14.455,0 L10.265,0 C9.84,0 9.435,0.177019123 9.135,0.48940581 L6.4,3.33212466 L6.4,14.9893545 L7.315,14.9893545 L11.84,19.2534328 C13.21,20.41447 15.225,20.1957993 16.34,18.7692335 L16.35,18.7588206 L17.245,19.5658195 C18.04,20.2426573 19.215,20.1124962 19.86,19.2846715 L21.43,17.2749838 L21.7,17.5040674 C22.385,18.0819827 23.395,17.9778538 23.95,17.2593645 L24.425,16.6502104 C24.985,15.931721 24.88,14.8852256 24.195,14.3021038 L24.195,14.3021038 Z",
    id: title != null ? "whitegoods-".concat(title) : null
  })))));
});

var Pen = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "31px",
    height: "32px",
    viewBox: "0 0 31 32"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M30.1462496,8.87691571 L27.3549094,11.7582804 C27.0703259,12.052042 26.6101484,12.052042 26.3255649,11.7582804 L19.6045507,4.82050431 C19.3199673,4.52674262 19.3199673,4.05172372 19.6045507,3.75796203 L22.3958909,0.876597379 C23.5281698,-0.292199126 25.36888,-0.292199126 26.507214,0.876597379 L30.1462496,4.63299685 C31.2845835,5.80179335 31.2845835,7.70186895 30.1462496,8.87691571 Z M17.2067835,6.23306051 L1.30643829,22.6462136 L0.0227851346,30.2402657 C-0.152808929,31.2653065 0.713051455,32.1528418 1.70606616,31.9778349 L9.06285194,30.6465319 L24.9631972,14.2333788 C25.2477807,13.9396172 25.2477807,13.4645983 24.9631972,13.1708366 L18.242183,6.23306051 C17.9515446,5.93929882 17.491367,5.93929882 17.2067835,6.23306051 Z M7.51278021,21.2399076 C7.17975698,20.8961439 7.17975698,20.3461221 7.51278021,20.0023584 L16.8374305,10.3769754 C17.1704537,10.0332117 17.7032909,10.0332117 18.0363141,10.3769754 C18.3693373,10.7207391 18.3693373,11.270761 18.0363141,11.6145246 L8.71166382,21.2399076 C8.37864059,21.5836713 7.84580343,21.5836713 7.51278021,21.2399076 L7.51278021,21.2399076 Z M5.32693686,26.4963668 L8.23332137,26.4963668 L8.23332137,28.7652071 L4.32786718,29.4714852 L2.44477222,27.5276578 L3.12898358,23.4962474 L5.32693686,23.4962474 L5.32693686,26.4963668 Z"
  }));
});

var Map = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "27px",
    viewBox: "0 0 32 27"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M16,0 C12.1338889,0 9,2.97474609 9,6.64453125 C9,9.61136719 13.575,15.01875 15.3277778,16.9815234 C15.6827778,17.3791406 16.3177778,17.3791406 16.6722222,16.9815234 C18.425,15.01875 23,9.61136719 23,6.64453125 C23,2.97474609 19.8661111,0 16,0 Z M16,8.859375 C14.7111111,8.859375 13.6666667,7.86796875 13.6666667,6.64453125 C13.6666667,5.42109375 14.7111111,4.4296875 16,4.4296875 C17.2888889,4.4296875 18.3333333,5.42109375 18.3333333,6.64453125 C18.3333333,7.86796875 17.2888889,8.859375 16,8.859375 Z M1.11777778,11.3879883 C0.442815432,11.6442448 0.000161653935,12.2646924 0,12.9547266 L0,26.1551953 C0,26.7521484 0.635,27.1603125 1.21888889,26.9388281 L8.88888889,23.625 L8.88888889,11.3336719 C8.39777778,10.4909766 7.99611111,9.67042969 7.70833333,8.88574219 L1.11777778,11.3879883 Z M16,18.9669727 C15.2183333,18.9669727 14.4788889,18.6410742 13.9716667,18.0725977 C12.8794444,16.8491602 11.7177778,15.455918 10.6666667,14.0268164 L10.6666667,23.6244727 L21.3333333,26.9994727 L21.3333333,14.0273437 C20.2822222,15.455918 19.1211111,16.8496875 18.0283333,18.073125 C17.5211111,18.6410742 16.7816667,18.9669727 16,18.9669727 Z M30.7811111,8.49867187 L23.1111111,11.8125 L23.1111111,27 L30.8822222,24.0495117 C31.5572855,23.7933742 32,23.1728523 32,22.4827734 L32,9.28230469 C32,8.68535156 31.365,8.2771875 30.7811111,8.49867187 L30.7811111,8.49867187 Z"
  }));
});

var ChatWithUs = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "25px",
    viewBox: "0 0 32 25"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M12.4444383,18.2397892 C10.355606,18.2397892 8.38738475,17.8623896 6.65871893,17.1962623 C4.91566424,18.5661843 2.77710974,19.40095 0.505166417,19.6402357 C0.488740902,19.6419646 0.472237437,19.6428585 0.455721997,19.6428585 C0.248166544,19.6428585 0.0606666367,19.5034611 0.0103333282,19.304633 C-0.0441110893,19.083595 0.126333271,18.9475459 0.295110965,18.7853807 C1.12938833,17.9796329 2.14077672,17.3462065 2.53633208,14.6393425 C0.945277311,13.1074786 0,11.1954249 0,9.11992249 C0,4.08258956 5.5720528,0 12.4444383,0 C19.3168238,0 24.8888766,4.08253376 24.8888766,9.11992249 C24.8888766,14.160771 19.3168238,18.2397892 12.4444383,18.2397892 Z M31.7259288,24.2204815 C30.9512625,23.487948 30.0120963,22.9121109 29.6448187,20.4513407 C33.4674835,16.8482154 32.5432062,11.6938066 27.5518197,8.89637337 C27.5535419,8.97081534 27.5554864,9.0452015 27.5554864,9.11992249 C27.5554864,15.9554698 20.3564344,21.1954813 11.7637164,20.9068653 C13.8815487,22.6345997 16.9853249,23.7244994 20.4443788,23.7244994 C22.3840445,23.7244994 24.2116547,23.381419 25.8168206,22.7758386 C27.4353753,24.021207 29.4211521,24.7800798 31.5308733,24.9976021 C31.7412065,25.0196445 31.9399287,24.8875017 31.9903175,24.692524 C32.0409286,24.4915753 31.8826509,24.3679146 31.7259288,24.2204815 L31.7259288,24.2204815 Z"
  }));
});

var CallUs = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "31px",
    height: "32px",
    viewBox: "0 0 31 32"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M29.8736456,1.53840565 L23.5767658,0.0385915824 C22.891738,-0.124596088 22.1915128,0.241841795 21.9143896,0.909279993 L19.0081374,7.90909981 C18.7531083,8.52337623 18.922527,9.23771889 19.4236103,9.66091414 L23.093783,12.7606674 C20.9157287,17.5528599 17.1033918,21.5424266 12.3619018,23.838679 L9.35901673,20.050175 C8.94904644,19.5329275 8.25702719,19.3580437 7.66194708,19.6212996 L0.880873555,22.6213027 C0.234474626,22.9072405 -0.12075416,23.6299912 0.0373943974,24.3373045 L1.49033886,30.8373113 C1.64134288,31.5127495 2.22495466,32 2.90622861,32 C18.411508,32 31,19.0292364 31,2.99996968 C31,2.30146895 30.5329411,1.69540581 29.8736456,1.53840565 Z"
  }));
});

var Mic = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "34",
    height: "48",
    viewBox: "0 0 34 48"
  }, otherAttr), jsx("title", null, title), jsx("path", {
    d: "M 12.923 26.524 C 11.682 25.812 10.689 24.854 9.95 23.655 C 9.21 22.455 8.84 21.14 8.84 19.711 L 8.84 7.873 C 8.84 6.442 9.21 5.127 9.95 3.925 C 10.689 2.73 11.682 1.772 12.923 1.056 C 14.159 0.343 15.523 -0.019 17.001 -0.019 C 18.486 -0.019 19.846 0.343 21.086 1.056 C 22.329 1.772 23.315 2.73 24.059 3.925 C 24.798 5.127 25.167 6.442 25.167 7.873 L 25.167 19.711 C 25.167 21.14 24.798 22.455 24.059 23.655 C 23.315 24.854 22.329 25.812 21.086 26.524 C 19.846 27.241 18.486 27.6 17.001 27.6 C 15.523 27.6 14.159 27.241 12.923 26.524 L 12.923 26.524 Z M 6.118 43.379 L 14.282 43.379 L 14.282 35.312 C 11.651 34.903 9.262 33.991 7.114 32.573 C 4.966 31.158 3.265 29.337 2.013 27.117 C 0.757 24.897 0.13 22.425 0.13 19.711 L 0.13 13.792 L 4.752 13.792 L 4.752 19.711 C 4.752 22.019 5.298 24.068 6.388 25.868 C 7.478 27.661 8.957 29.061 10.835 30.054 C 12.709 31.047 14.765 31.542 17.001 31.542 C 19.241 31.542 21.295 31.047 23.174 30.054 C 25.048 29.061 26.531 27.661 27.616 25.868 C 28.706 24.068 29.252 22.019 29.252 19.711 L 29.252 13.792 L 33.879 13.792 L 33.879 19.711 C 33.879 22.398 33.252 24.859 31.996 27.095 C 30.74 29.328 29.03 31.158 26.868 32.573 C 24.706 33.991 22.329 34.903 19.727 35.312 L 19.727 43.379 L 27.89 43.379 L 27.89 47.981 L 6.118 47.981 L 6.118 43.379 Z"
  }));
});

var DatingServices = (function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return jsx("svg", _extends({
    className: className,
    css: style,
    width: "32px",
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), jsx("title", null, title), jsx("g", {
    "fill-rule": "evenodd"
  }, jsx("path", {
    "fill-rule": "nonzero",
    d: "M23.85,0 L9.15,0 C7.4109375,0 6,1.34375 6,3 L6,29 C6,30.65625 7.4109375,32 9.15,32 L23.85,32 C25.5890625,32 27,30.65625 27,29 L27,3 C27,1.34375 25.5890625,0 23.85,0 Z M16,30.0606061 C14.89375,30.0606061 14,29.1939394 14,28.1212121 C14,27.0484848 14.89375,26.1818182 16,26.1818182 C17.10625,26.1818182 18,27.0484848 18,28.1212121 C18,29.1939394 17.10625,30.0606061 16,30.0606061 Z M24,23.5151515 C24,23.9151515 23.6383929,24.2424242 23.1964286,24.2424242 L9.80357143,24.2424242 C9.36160714,24.2424242 9,23.9151515 9,23.5151515 L9,4.60606061 C9,4.20606061 9.36160714,3.87878788 9.80357143,3.87878788 L23.1964286,3.87878788 C23.6383929,3.87878788 24,4.20606061 24,4.60606061 L24,23.5151515 Z"
  }), jsx("path", {
    d: "M21.335227,9.75214067 C20.0508777,8.60550987 18.1407597,8.8117561 16.961877,10.0860631 L16.5001675,10.5844915 L16.038458,10.0860631 C14.861919,8.8117561 12.9494573,8.60550987 11.665108,9.75214067 C10.1932624,11.068188 10.1159202,13.4301984 11.4330814,14.8567348 L15.9681469,19.7624485 C16.2611098,20.0791838 16.7368815,20.0791838 17.0298444,19.7624485 L21.5649099,14.8567348 C22.8844382,13.4301984 22.8070725,11.068188 21.335227,9.75214067"
  })));
});

var editorIconDefinitions = {
  AppsAndGames: AppsAndGames,
  Auction: Auction,
  BeautyEngagement: BeautyEngagement,
  Bullhorn: Bullhorn,
  Leaf: Leaf,
  Hardhat: Hardhat,
  BrokerServices: BrokerServices,
  Cars: Cars,
  Clothes: Clothes,
  Complaint: Complaint,
  ComputerTvGameConsole: ComputerTvGameConsole,
  ConcertAndEvent: ConcertAndEvent,
  ConsumerRights: ConsumerRights,
  ContractWorkHouses: ContractWorkHouses,
  Craftsman: Craftsman,
  DistanceContractLaw: DistanceContractLaw,
  EducationAndCourses: EducationAndCourses,
  ElectricityHeatingContract: ElectricityHeatingContract,
  FurnituresAndDecoration: FurnituresAndDecoration,
  GymAndWorkoutService: GymAndWorkoutService,
  Hairdresser: Hairdresser,
  Insurance: Insurance,
  InternetFiberBroadband: InternetFiberBroadband,
  LoanSaveInvest: LoanSaveInvest,
  LotteryAndGames: LotteryAndGames,
  MobilePhone: MobilePhone,
  MoveAndCleaningService: MoveAndCleaningService,
  NotDefinedPicture: NotDefinedPicture,
  Pets: Pets,
  PurchaseFromPrivate: PurchaseFromPrivate,
  Receipt: Receipt,
  SalesLaw: SalesLaw,
  Telemarketing: Telemarketing,
  Travel: Travel,
  WhiteGoods: WhiteGoods,
  Withdrawal: Withdrawal,
  Pen: Pen,
  Map: Map,
  ChatWithUs: ChatWithUs,
  CallUs: CallUs,
  Mic: Mic,
  DatingServices: DatingServices
};

var EditorIcon = function EditorIcon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["icon", "className", "style", "title"]);

  var Element = editorIconDefinitions[icon];

  if (Element === undefined) {
    console.log("Could not find icon in storybook tried to load: ".concat(icon));
    return null;
  }

  return jsx(Element, _extends({
    title: title,
    className: className,
    style: style,
    role: "img",
    "aria-label": title || icon || ""
  }, otherAttr));
};

function _templateObject8$1() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n color:", " !important;\n   &:hover {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n   }\n   &:active {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n     color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  color:", " !important;\n   &:hover {\n    background-color:", " !important;\n   }\n   &:active {\n    background-color:", " !important;\n    color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

var LinkColors$1 = css(_templateObject2$1(), colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.states.visited);
var LinkColorsInverted$1 = css(_templateObject3$1(), colors.theme1.mid, colors.theme1.xDark, colors.states.visited);
var LinkWrapperColorStyle$1 = css(_templateObject4$1(), LinkColors$1);
var LinkWrapperInvertedColorStyle$1 = css(_templateObject5$1(), LinkColorsInverted$1);
var ElementLinkColorStyle$1 = css(_templateObject6$1(), LinkColors$1);
var ElementLinkInvertedColorStyle$1 = css(_templateObject7$1(), LinkColorsInverted$1);
var VisuallyHidden$1 = css(_templateObject8$1());
var viewportSmall = 420;
var viewportMedium = 768;
var viewportLarge = 1120;

var mediaQueryMaxWidth = function mediaQueryMaxWidth(width) {
  return "@media (max-width: ".concat(width, "px)");
};

var mediaQueryMinWidth = function mediaQueryMinWidth(width) {
  return "@media (min-width: ".concat(width, "px)");
};

var small = mediaQueryMaxWidth(viewportSmall);
var medium = mediaQueryMinWidth(viewportMedium);
var large = mediaQueryMinWidth(viewportLarge);

function _templateObject8$2() {
  var data = _taggedTemplateLiteral(["\n\n\n      font-size:1.6rem;\n\n\n      line-height:2.4rem;\n\n\n"]);

  _templateObject8$2 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n\n\n      font-size:1.6rem;\n\n\n      line-height:2.4rem;\n\n\n      ", "{\n\n\n            font-size:1.8rem;      \n\n\n      }\n\n\n\n\n\n"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n\n\n      font-size:1.8rem;\n\n\n      line-height:3.2rem;\n\n\n      ", "{\n\n\n            font-size:2rem;      \n\n\n      }\n\n\n\n\n\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n      font-size:1.8rem;\n\n\n      line-height:3.2rem;\n\n\n      ", "{\n\n\n            font-size:2.4rem;\n\n\n            \n\n\n      }\n\n\n\n\n\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n      font-size:2.0rem;\n\n\n      line-height:3.2rem;\n\n\n\n\n\n\n\n\n      ", "{\n\n\n            font-size:2.8rem;\n\n\n            line-height:3.2rem;\n\n\n      }\n\n\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n      font-size:2.4rem;\n\n\n      line-height:3.2rem;\n\n\n\n\n\n      ", "{\n\n\n            font-size:3.4rem;\n\n\n            line-height:4.8rem;\n\n\n      }\n\n\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n      font-size:2.8rem;\n\n\n      line-height:3.2rem;\n\n\n\n\n\n      ", "{\n\n\n            font-size:4.8rem;\n\n\n            line-height:5.6rem;\n\n\n      }\n\n\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n\n\n      color: #161616;\n\n\n      font-weight:700;\n\n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var commonSubHeadingStyle = css(_templateObject$1());
var h1Style = css(_templateObject2$2(), medium);
var h2Style = css(_templateObject3$2(), medium);
var h3Style = css(_templateObject4$2(), medium);
var h4Style = css(_templateObject5$2(), medium);
var h5Style = css(_templateObject6$2(), medium);
var h6Style = css(_templateObject7$2(), medium);
var h7Style = css(_templateObject8$2());

var SubHeading = function SubHeading(_ref) {
  var children = _ref.children,
      text = _ref.text,
      style = _ref.style,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 2 : _ref$level,
      tag = _ref.tag,
      styleLevel = _ref.styleLevel,
      otherAttr = _objectWithoutProperties(_ref, ["children", "text", "style", "level", "tag", "styleLevel"]);

  var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
  var stylings = [h1Style, h2Style, h3Style, h4Style, h5Style, h6Style, h7Style];
  var SelectedHeading = tag || headings[level - 1] || 'h2';
  var SelectedStyling = stylings[styleLevel ? styleLevel - 1 : level - 1];
  var alignment = tag == "legend" ? "center" : null; // Ugly fix for firefox

  return jsx(SelectedHeading, _extends({
    css: [commonSubHeadingStyle, SelectedStyling, style],
    align: alignment
  }, otherAttr), children, text);
};

var Heading = function Heading(_ref) {
  var text = _ref.text,
      style = _ref.style,
      children = _ref.children,
      otherAttr = _objectWithoutProperties(_ref, ["text", "style", "children"]);

  return jsx(SubHeading, _extends({
    "data-nosnippet": "true",
    "data-addsearch": "exclude",
    style: style,
    level: 1,
    text: text
  }, otherAttr), children);
};

function _templateObject6$3() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 5.6rem;\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n    padding: .8rem 1.6rem .8rem 1.4rem;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    color: ", ";\n    line-height: 2.4rem;\n    font-size: 2.1rem;\n    font-weight: 500;\n    word-wrap:break-word;\n\n    [dir='rtl'] &{\n        padding-right: ", ";\n    }\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";    \n    min-height: 7.2rem;\n    text-decoration: none;\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    height:100%;\n    align-items: center;\n    border-radius: .8rem;\n    border: 1px solid ", ";\n    &:hover {\n        background-color: ", ";\n        border-color: ", ";\n        box-shadow: inset 0 0 0 1px ", ";\n        span {\n            text-decoration:underline;\n        }\n    }\n    &:active \n    {   \n        background-color: ", ";\n        border-color:", ";\n        span{\n            color:#fff;\n        }\n        svg {\n            fill:#fff;\n        }\n    }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    padding: 0 1.6rem 0 1.2rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: ", ";\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    transform: rotate(270deg);\n    padding-right: .4rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: ", ";\n\n    [dir='rtl'] &{\n        left: .5rem;\n        right: auto;\n        transform: rotate(90deg);\n    }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var arrowStyle = css(_templateObject$2(), colors.theme1.mid);
var iconStyle = css(_templateObject2$3(), colors.theme1.mid);
var iconCardStyle = css(_templateObject3$3(), colors.common.white, colors.theme1.mid, colors.theme1.midLight, colors.theme1.mid, colors.theme1.mid, colors.theme1.xDark, colors.theme1.xDark);
var iconText = css(_templateObject4$3(), colors.theme1.mid, spacing.s);
var noIcon = css(_templateObject5$3());
var topAreaIcon = css(_templateObject6$3());

/** @jsx jsx */
var IconCard = React.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      text = _ref.text,
      url = _ref.url,
      style = _ref.style,
      onClick = _ref.onClick,
      id = _ref.id;
  var haveIcon = !icon ? noIcon : null;
  return jsx("a", {
    ref: ref,
    id: id,
    href: url,
    onClick: onClick,
    css: [iconCardStyle, style],
    className: "noStyle"
  }, icon && React.cloneElement(icon, {
    "aria-hidden": "true",
    style: iconStyle
  }), jsx("span", {
    css: [iconText, haveIcon],
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), jsx(Arrow, {
    "aria-hidden": "true",
    style: arrowStyle
  }));
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    border-radius:1.6rem;\n    color: ", ";\n    padding: .4rem 1.6rem;\n    display: table;\n    min-height: 3rem;\n    text-decoration: none;\n    font-size:1.6rem;\n    font-weight: 500;\n    line-height:2.4rem;\n    display:inline-block;\n    vertical-align:middle;\n    box-sizing:border-box;\n\n    &:hover {\n        background-color: ", ";\n        box-shadow:inset 0px 0px 0px 1px ", ";\n        text-decoration:underline;\n    }\n    &:active {\n        color:#fff;\n        background-color: ", ";\n        box-shadow:none;\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var tagStyle = css(_templateObject$3(), colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.theme1.xDark);

/** @jsx jsx */

var Tag = function Tag(_ref) {
  var id = _ref.id,
      url = _ref.url,
      text = _ref.text,
      style = _ref.style,
      onClick = _ref.onClick;
  return jsx("a", {
    key: id,
    href: url,
    css: [tagStyle, style],
    onClick: onClick,
    className: "noStyle"
  }, text);
};

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

function _templateObject8$3() {
  var data = _taggedTemplateLiteral(["\n    margin:0 1.6rem .8rem 0;\n    list-style-type:none;\n    &:before{\n        content:none !important;\n    }\n    &:last-child{\n        margin-right:0;\n    }\n"]);

  _templateObject8$3 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$3() {
  var data = _taggedTemplateLiteral(["\n    margin:0;\n    padding:0;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    flex-flow: wrap;\n"]);

  _templateObject7$3 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$4() {
  var data = _taggedTemplateLiteral(["\n     position: relative;\n    min-height:6.9rem;\n    box-sizing:border-box;\n    overflow: auto;\n    padding: .8rem 1.6rem 0 1.6rem;\n"]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["     \n        padding: .8rem 4rem .8rem 6.4rem;\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n        width:100%;\n        height:100%;\n        padding: .8rem 4rem .8rem 1.6rem;\n        display: flex;\n        flex-direction:column;\n        box-sizing:border-box;\n        justify-content:center;\n        margin:0;\n        color: #fff;\n        line-height: 2.4rem;\n        font-size: 2.1rem;\n        font-weight: 500;\n        word-wrap:break-word;\n\n        [dir='rtl'] &{\n            padding: .8rem 1.6rem .8rem 4rem;\n        }\n\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";    \n    min-height: 7.2rem;\n    text-decoration: none;\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    justify-content:center;\n    flex-direction:column;\n    border-top-left-radius:.8rem;\n        border-top-right-radius:.8rem;\n\n    &:hover {\n        background-color: ", ";\n           .tagHeading{\n                text-decoration:underline;\n            }\n    }\n    &:active \n    {   \n        background-color: ", ";\n        border-color:", ";\n        span{\n            color:#fff;\n        }\n        svg {\n            fill:#fff;\n        }\n    }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    background-color:#fff;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    background-color:", ";    \n    display:flex;\n    flex-direction:column;\n    height:100%;\n    min-height:16rem;\n    border-radius:.8rem;\n    \n\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var tagBlockItem = css(_templateObject$4(), colors.theme3.xLight);
var invertedTag = css(_templateObject2$4());
var tagLink = css(_templateObject3$4(), colors.theme1.mid, colors.theme1.midDark, colors.theme1.xDark, colors.theme1.xDark);
var tagHeading = css(_templateObject4$4());
var tagIconHeading = css(_templateObject5$4());
var tagsArea = css(_templateObject6$4());
var tagsList = css(_templateObject7$3());
var tagsListItem = css(_templateObject8$3());
var tagItem = css(_templateObject9());
var tagItemText = css(_templateObject10());
var iconStyle$1 = css(_templateObject11());
var arrowStyle$1 = css(_templateObject12());
var secondaryArrowStyleCSS = css(_templateObject13());

/** @jsx jsx */

var GetTags = function GetTags(tags, onClick) {
  return jsx("ul", {
    css: tagsList
  }, tags.slice(0, 3).map(function (child, idx) {
    return jsx("li", {
      key: "lcbc-".concat(idx),
      css: tagsListItem
    }, jsx(Tag, {
      id: idx,
      onClick: onClick,
      url: child.url,
      text: child.titleInNavigation && child.titleInNavigation || child.title && child.title || child.headline && child.headline,
      style: tagItem
    }));
  }));
};

var TagBlock = React.forwardRef(function (_ref, ref) {
  var _ref$invertedColors = _ref.invertedColors,
      invertedColors = _ref$invertedColors === void 0 ? false : _ref$invertedColors,
      heading = _ref.heading,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      headingUrl = _ref.headingUrl,
      icon = _ref.icon,
      tags = _ref.tags,
      alternativeTagText = _ref.alternativeTagText,
      style = _ref.style,
      onClick = _ref.onClick,
      _ref$secondaryArrowSt = _ref.secondaryArrowStyle,
      secondaryArrowStyle = _ref$secondaryArrowSt === void 0 ? false : _ref$secondaryArrowSt;
  var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
  var SelectedHeading = headings[headingLevel - 1] || 'h2';
  var EditorIcon = icon;
  return jsx("div", {
    css: [tagBlockItem, invertedColors ? invertedTag : null, style]
  }, jsx("a", {
    ref: ref,
    href: headingUrl,
    css: tagLink,
    className: "noStyle",
    onClick: onClick
  }, icon && jsx(EditorIcon, {
    "aria-hidden": "true",
    css: iconStyle$1
  }), jsx(SelectedHeading, {
    className: "tagHeading",
    css: [tagHeading, icon != null ? tagIconHeading : null]
  }, heading), secondaryArrowStyle ? jsx(LinkArrow, {
    "aria-hidden": "true",
    style: secondaryArrowStyleCSS
  }) : jsx(Arrow, {
    "aria-hidden": "true",
    style: arrowStyle$1
  })), jsx("div", {
    css: tagsArea
  }, tags && tags.length > 0 ? GetTags(tags, onClick) : jsx("p", {
    css: tagItemText
  }, alternativeTagText)));
});

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n\n\n  color: #000;\n\n\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n\n\n  position: absolute;\n\n\n  top: -2rem;\n\n\n  left: 50%;\n\n\n  width:4rem;\n\n\n  height:4rem;\n\n\n  transform: translate(-50%, 0);\n\n\n  ", " {\n\n\n    left: 1.2rem;\n\n\n    top:-.8rem; \n\n\n  }\n\n\n\n\n\n  [dir=\"rtl\"] &{\n\n\n    ", " {\n\n\n      left: auto;\n\n\n      right: -3.2rem; \n\n\n    }\n\n\n  }\n\n\n\n\n\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n\n\n  position: relative;\n\n\n  background-color: ", ";\n\n\n  border-radius: 0.7rem;\n\n\n  padding: 4rem 1.6rem 2.4rem 1.6rem;\n\n\n  margin-top: 2rem;\n\n\n  ", " {\n\n\n    padding: 2.4rem 3.2rem 2.4rem 3.2rem;\n\n\n    margin-top: .8rem;\n\n\n    margin-left: .8rem;\n\n\n  }\n\n\n  [dir=\"rtl\"] &{\n\n\n    ", " {\n\n\n      margin-left: .0rem;\n\n\n      margin-right: .8rem;\n\n\n    }\n\n\n  }\n\n\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper = css(_templateObject$5(), colors.theme1.light, medium, medium);
var exclamationMarkImage = css(_templateObject2$5(), medium, medium);
var heading = css(_templateObject3$5());

/** @jsx jsx */
var PrerequisitesBox = function PrerequisitesBox(_ref) {
  var text = _ref.text,
      children = _ref.children,
      wrapperStyle = _ref.wrapperStyle;
  if (children == null) return null;
  return jsx("div", {
    css: [wrapper, wrapperStyle]
  }, jsx(Exclamationmark, {
    style: exclamationMarkImage
  }), text && jsx(SubHeading, {
    style: heading,
    text: text,
    styleLevel: 3
  }), children);
};

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n  position:absolute;\n  fill: #fff;\n  width:6.4rem;\n  height:6.4rem;\n  left:calc(50% - 3.2rem);\n  top:calc(50% - 3.2rem);\n"]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 0.4rem;\n  fill: ", ";\n"]);

  _templateObject8$4 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$4() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius: .8rem;\n  border-top-left-radius:.8rem;\n  background-color: ", ";\n  padding-top:36.84%;\n  position:relative;\n  \n"]);

  _templateObject7$4 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$5() {
  var data = _taggedTemplateLiteral(["\n  margin-top:-.8rem;\n  width:100%;\n  min-height:11.2rem;\n\n  picture {\n    display:block;\n    width:100%;\n    min-height:5rem;\n  }\n  img {\n    display:block;\n    width:100%;\n    height:auto;\n    border-top-right-radius: .8rem;\n    border-top-left-radius:.8rem;\n  }\n\n"]);

  _templateObject6$5 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n  margin:1.6rem 2.4rem 2.4rem 2.4rem;\n  ", " {\n      max-width:32.8rem;\n  }\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  margin:0;\n  padding:0;\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  margin: 0 0 .8rem 0;\n  font-weight:700;\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  text-decoration:none;\n  padding-top:.8rem;\n  display:flex;\n\n  &:hover .focusWrapper {\n      background-color: #E6C3D1;\n  }\n  &:hover {\n    box-shadow: 0px 0px 0px 2px ", ";\n    border-radius: 8px;\n  }\n  &:active {\n    box-shadow: 0px 0px 0px 2px ", ";\n    border-radius: 8px;\n  }\n  &:active h3 {\n      color: ", ";      \n  }\n  &:active h3 > svg {\n    fill: ", ";\n  }\n\n  &:hover h3, &:active h3 {\n    text-decoration:underline;\n  }\n  .image {\n    max-width: 100%;\n    max-height: 100%;\n    transition: .1s all;\n  }\n  &:hover .image {\n    filter: brightness(75%);\n  }\n  \n  ", " {\n    height:100%\n  }\n\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  min-height: 25.6rem;\n  display:flex;\n  /* height: calc(100% - .8rem); */\n  height: 100%;\n  width:100%;\n  flex-direction:column;\n  background-color: ", ";\n  border-bottom-right-radius:.8rem;\n  border-bottom-left-radius:.8rem;\n\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var focusWrapper = css(_templateObject$6(), colors.theme2.light);
var linkWrapper = css(_templateObject2$6(), colors.theme2.mid, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.xDark, medium);
var focusHeadline = css(_templateObject3$6(), colors.theme2.mid);
var focusText = css(_templateObject4$5(), colors.theme3.dark);
var textArea = css(_templateObject5$5(), medium);
var pictureWrapper = css(_templateObject6$5());
var iconBackground = css(_templateObject7$4(), colors.theme2.mid);
var externalIcon = css(_templateObject8$4(), colors.theme2.mid);
var puffIcon = css(_templateObject9$1());

/** @jsx jsx */
var FocusPuff = function FocusPuff(_ref) {
  var headline = _ref.headline,
      text = _ref.text,
      url = _ref.url,
      isExternalLink = _ref.isExternalLink,
      image = _ref.image,
      imageAlt = _ref.imageAlt,
      icon = _ref.icon,
      imageComponent = _ref.imageComponent,
      onClick = _ref.onClick;
  var imageArea = imageComponent;

  if (imageArea == null) {
    if (image != null) imageArea = jsx("img", {
      src: image,
      alt: imageAlt
    });else {
      imageArea = jsx("div", {
        className: 'iconBackground',
        css: iconBackground
      }, icon && React.cloneElement(icon, {
        style: puffIcon
      }));
    }
  }

  var puffMarkup = function puffMarkup() {
    return jsx("div", {
      css: focusWrapper,
      className: 'focusWrapper'
    }, jsx("div", {
      css: pictureWrapper,
      className: imageComponent ? 'image' : null
    }, imageArea), jsx("div", {
      css: textArea
    }, jsx("h3", {
      css: focusHeadline
    }, headline, isExternalLink && jsx(External, {
      title: "Extern l\xE4nk",
      style: externalIcon
    })), jsx("p", {
      css: focusText
    }, text)));
  };

  return url !== null ? jsx("a", {
    css: linkWrapper,
    onClick: onClick,
    href: url,
    className: "noStyle"
  }, puffMarkup()) : puffMarkup();
};

function _templateObject9$2() {
  var data = _taggedTemplateLiteral(["\n  position:absolute;\n  fill: #fff;\n  width:6.4rem;\n  height:6.4rem;\n  left:calc(50% - 3.2rem);\n  top:calc(50% - 3.2rem);\n"]);

  _templateObject9$2 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 0.8rem;\n  fill: ", ";\n  width:2rem;\n"]);

  _templateObject8$5 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$5() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius:.8rem;\n  border-top-left-radius:.8rem;\n  border-bottom-right-radius:0;\n  background-color: ", ";\n  position:relative;\n  padding-top:36.84%;\n\n  ", "{\n    height:100%;\n    padding-top:0;\n    border-top-right-radius:0;\n    border-bottom-left-radius: .8rem;\n    border-bottom-right-radius:0;\n  }\n"]);

  _templateObject7$5 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$6() {
  var data = _taggedTemplateLiteral(["\n  width:100%;\n  min-height:11.2rem;\n\n  picture {\n    display:block;\n    width:100%;\n    height:100%;\n    min-height:5rem;\n  }\n  img {\n    display:block;\n    width:100%;\n    height:100%;\n    /* height:auto; */\n    border-top-right-radius: .8rem;\n    border-top-left-radius:.8rem;\n  }\n\n  ", "{\n    max-width:49.11%;\n    margin-top:0;\n    margin-left:-.8rem;\n    img {\n      border-top-right-radius: 0;\n      border-bottom-left-radius:.8rem;\n    }\n  }\n\n  ", "{\n    max-width:30.4rem;\n  }\n"]);

  _templateObject6$6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$6() {
  var data = _taggedTemplateLiteral(["\n  padding:1.6rem 2.4rem 2.4rem 2.4rem;\n  box-sizing:border-box;\n  ", " {   \n      max-width:50.89%;  \n      display:flex;\n      justify-content:center;\n      flex-direction:column;\n      width:100%;\n  }\n  ", " {   \n      max-width:32.8rem;\n      \n  }\n"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.8rem;\n  line-height: 2.4rem;\n  margin:0;\n  padding:0;\n  color:", ";\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  margin: 0 0 .8rem 0;\n  font-weight:700;\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  text-decoration:none;\n  display:flex;\n  flex-shrink: 0;\n\n  &:hover .textarea {\n    background-color: ", ";\n    border-radius: 8px;\n  }\n  &:hover {\n    box-shadow: 0px 0px 0px 2px ", "; \n    border-radius: 8px;\n  }\n  &:active {\n    box-shadow: 0px 0px 0px 2px ", ";\n    border-radius: 8px;\n  }\n  &:active h3 {\n    color: ", ";      \n  }\n  &:active h3 > svg {\n    fill: ", ";\n  }\n\n  &:hover h3, &:active h3 {\n    text-decoration:underline;\n  }\n  /* .image {\n    max-width: 100%;\n    max-height: 100%;\n    transition: .1s all;\n  }\n  &:hover .image {\n    filter: brightness(75%);\n  } */\n  ", " {\n    height: calc(100% + .8rem);\n  }\n\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  min-height: 25.6rem;\n  display:flex;\n  height:100%;\n  width:100%;\n  flex-direction:column;\n  background-color: #fff;\n  border-bottom-right-radius:.8rem;\n  border-bottom-left-radius:.8rem;\n  ", "{\n    flex-direction:row;\n    /* margin-top:-.8rem; */\n    margin-left:.8rem;\n    border-top-right-radius:.8rem;\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var focusWrapper$1 = css(_templateObject$7(), medium);
var linkWrapper$1 = css(_templateObject2$7(), colors.theme1.light, colors.theme1.mid, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.xDark, medium);
var focusHeadline$1 = css(_templateObject3$7(), colors.theme1.mid);
var focusText$1 = css(_templateObject4$6(), colors.theme3.dark);
var textArea$1 = css(_templateObject5$6(), medium, large);
var pictureWrapper$1 = css(_templateObject6$6(), medium, large);
var iconBackground$1 = css(_templateObject7$5(), colors.theme2.mid, medium);
var externalIcon$1 = css(_templateObject8$5(), colors.theme1.mid);
var puffIcon$1 = css(_templateObject9$2());

/** @jsx jsx */
var CampaignFocusPuff = function CampaignFocusPuff(_ref) {
  var headline = _ref.headline,
      text = _ref.text,
      url = _ref.url,
      isExternalLink = _ref.isExternalLink,
      image = _ref.image,
      imageAlt = _ref.imageAlt,
      icon = _ref.icon,
      imageComponent = _ref.imageComponent,
      onClick = _ref.onClick;
  var imageArea = imageComponent;

  if (imageArea == null) {
    if (image != null) imageArea = jsx("img", {
      src: image,
      alt: imageAlt
    });else {
      imageArea = jsx("div", {
        css: iconBackground$1
      }, icon && React.cloneElement(icon, {
        style: puffIcon$1
      }));
    }
  }

  var campaignPuffMarkup = function campaignPuffMarkup() {
    return jsx("div", {
      css: focusWrapper$1
    }, jsx("div", {
      css: pictureWrapper$1,
      className: imageComponent ? 'image' : null
    }, imageArea), jsx("div", {
      css: textArea$1,
      className: "textarea"
    }, jsx("h3", {
      css: focusHeadline$1
    }, headline, isExternalLink && jsx(External, {
      title: "Extern l\xE4nk",
      style: externalIcon$1
    })), jsx("p", {
      css: focusText$1
    }, text)));
  };

  return url !== null ? jsx("a", {
    css: linkWrapper$1,
    href: url,
    onClick: onClick,
    className: "noStyle"
  }, campaignPuffMarkup()) : campaignPuffMarkup();
};

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 0.7rem;\n    padding: ", " ", " ", " ", ";\n    ", " {\n        padding: ", " ", " ", " ", ";\n    }\n    ul {\n        padding-left: 0;\n        li {\n            margin-bottom: 1rem;\n        }\n    }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$1 = css(_templateObject$8(), colors.theme3.xLight, spacing.m, spacing.s, spacing.m, spacing.s, medium, spacing.m, spacing.l, spacing.m, spacing.l);
var secondaryColorStyle = css(_templateObject2$8(), colors.theme2.light);

/** @jsx jsx */
var FactBox = function FactBox(_ref) {
  var children = _ref.children,
      headline = _ref.headline,
      _ref$headlineLevel = _ref.headlineLevel,
      headlineLevel = _ref$headlineLevel === void 0 ? 2 : _ref$headlineLevel,
      content = _ref.content,
      secondaryColor = _ref.secondaryColor,
      style = _ref.style;
  if (!content && !children) return null;
  return jsx("div", {
    css: [wrapper$1, LinkWrapperInvertedColorStyle$1, secondaryColor && secondaryColorStyle, style]
  }, headline && jsx(SubHeading, {
    level: headlineLevel,
    text: headline,
    styleLevel: 3
  }), children, content);
};

function _templateObject10$1() {
  var data = _taggedTemplateLiteral([" \n    font-size: 2.1rem;\n    line-height: 2.4rem;\n    font-weight: 500;\n\n"]);

  _templateObject10$1 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$3() {
  var data = _taggedTemplateLiteral(["\n\n    width: 100%;\n    font-size: 1.8rem;\n    line-height: 3.2rem;\n    padding-right: 20%;\n    color: ", ";\n    font-weight: 400;\n    margin-top: 1.6rem;\n    display:block;\n    [dir='rtl'] & {\n        padding-left: 20%;\n        padding-right: 0%;\n    }\n\n"]);

  _templateObject9$3 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$6() {
  var data = _taggedTemplateLiteral(["\n    line-height: 2.4rem!important;\n    margin-bottom: 0;\n    padding-bottom: 0;\n    font-size: 2.1rem;\n    display: flex;\n    font-weight: 500 !important;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    color: ", ";\n\n"]);

  _templateObject8$6 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.4rem;\n    cursor: pointer;\n    display: block;\n    padding: 0;\n    line-height: 2.4rem;\n    margin-top: auto;\n    a{\n        padding: 1.6rem;\n        font-weight: 500 !important;\n        display: block;\n        border-radius: 0 !important;\n    }\n\n"]);

  _templateObject7$6 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$7() {
  var data = _taggedTemplateLiteral(["\n\n    display: inline-flex;\n    flex-direction:column;\n    padding: 0 0 1.6rem 0;\n    a{\n        font-weight: normal !important;\n        &:hover{\n            border-radius: 0 !important;\n        }\n    }\n\n"]);

  _templateObject6$7 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$7() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(0deg)!important;\n"]);

  _templateObject5$7 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral(["\n    padding: 1.6rem;\n    box-sizing:border-box;\n    text-decoration: none !important;\n    \n    &:hover{\n        border-radius: .8rem .8rem 0 0 !important;\n        box-shadow: none !important;\n        h2 {\n            text-decoration: underline!important;\n        }\n    }\n    &:visited {\n        color: ", "!important;\n        svg{\n            fill: ", "!important;\n        }\n    }\n    &:active {\n        background-color: ", "!important;\n        color: ", "!important;\n        h2, span {\n            color: ", "!important;\n        }\n        svg{\n            fill: ", "!important;\n        }\n    }\n\n    .tabnav &:focus {\n        outline: none;\n\n        > *{\n            outline: 4px solid ", ";\n            outline-offset: 6px;\n        }\n    }\n\n\n\n    width: 100%;\n    span{\n        max-width: 84%;\n    }\n    [dir='rtl'] &{\n        svg{\n            right: 1.4rem;;\n            transform: rotate(90deg);\n        }\n    }\n    svg{\n        flex-shrink: 0;\n        height: 3.2rem;\n        width: 3.2rem;\n        position: relative;\n        right: -1.4rem;\n        transform: rotate(-90deg);\n    }\n\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n    .tabnav &:focus {\n        outline: 4px solid ", ";\n        \n        > *{\n            outline: none;\n        }\n    }\n    padding: 2.4rem 1.6rem;\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n    overflow: visible;\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    background-color: #fff;\n    border-radius: 0.8rem;\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$2 = css(_templateObject$9());
var linkTextWrapper = css(_templateObject2$9());
var linkTextMainLinkStyle = css(_templateObject3$8(), colors.states.focus);
var mainLinkStyle = css(_templateObject4$7(), colors.theme1.mid, colors.theme1.mid, colors.theme1.xDark, colors.common.white, colors.common.white, colors.common.white, colors.states.focus);
var rotateArrow = css(_templateObject5$7());
var childrenWrapper = css(_templateObject6$7());
var showAllLink = css(_templateObject7$6());
var innerTextWrapperStyle = css(_templateObject8$6(), colors.theme1.mid);
var linkTextCardContentStyle = css(_templateObject9$3(), colors.theme3.dark);
var customFontSize = css(_templateObject10$1());

/** @jsx jsx */
var LinkCard = React.forwardRef(function (_ref, ref) {
  var text = _ref.text,
      href = _ref.href,
      children = _ref.children,
      id = _ref.id,
      _ref$secondaryArrowSt = _ref.secondaryArrowStyle,
      secondaryArrowStyle = _ref$secondaryArrowSt === void 0 ? false : _ref$secondaryArrowSt,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      onClick = _ref.onClick,
      _ref$beforeToggleCoun = _ref.beforeToggleCount,
      beforeToggleCount = _ref$beforeToggleCoun === void 0 ? 3 : _ref$beforeToggleCoun,
      style = _ref.style,
      childrenWrapperStyle = _ref.childrenWrapperStyle;
  var childrenArray = React.Children.toArray(children);
  var itemsToShow = [];

  if (childrenArray && childrenArray.length > 0) {
    itemsToShow = childrenArray.slice(0, beforeToggleCount).filter(Boolean);
  }

  return jsx("div", {
    id: id,
    css: [wrapper$2, style]
  }, jsx("a", {
    ref: ref,
    href: href,
    css: mainLinkStyle,
    onClick: onClick
  }, jsx(SubHeading, {
    level: headingLevel,
    styleLevel: 3,
    style: innerTextWrapperStyle
  }, jsx("span", {
    css: customFontSize,
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), secondaryArrowStyle ? jsx(LinkArrow, {
    style: rotateArrow,
    "aria-hidden": "true"
  }) : jsx(Arrow, {
    "aria-hidden": "true"
  }))), itemsToShow.length > 0 && jsx("div", {
    css: [childrenWrapper, childrenWrapperStyle]
  }, itemsToShow), childrenArray.length > beforeToggleCount && jsx("span", {
    css: showAllLink
  }, jsx("a", {
    href: href,
    onClick: onClick
  }, "Visa alla (", childrenArray.length, ")")));
});
LinkCard.displayName = "LinkCard";

var LinkTextCard = React.forwardRef(function (_ref, ref) {
  var text = _ref.text,
      href = _ref.href,
      children = _ref.children,
      id = _ref.id,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      onClick = _ref.onClick,
      style = _ref.style,
      dir = _ref.dir,
      lang = _ref.lang,
      other = _objectWithoutProperties(_ref, ["text", "href", "children", "id", "headingLevel", "onClick", "style", "dir", "lang"]);

  var renderLinkText = function renderLinkText() {
    if (children) {
      return jsx(SubHeading, {
        level: headingLevel,
        styleLevel: 3,
        style: innerTextWrapperStyle
      }, jsx("span", null, text), jsx(Arrow, {
        "aria-hidden": "true"
      }));
    } else {
      return jsx("div", {
        css: innerTextWrapperStyle
      }, jsx("span", null, text), jsx(Arrow, {
        "aria-hidden": "true"
      }));
    }
  };

  return jsx("div", _extends({
    id: id,
    dir: dir,
    css: [wrapper$2, linkTextWrapper, style],
    lang: lang
  }, other), jsx("a", {
    ref: ref,
    href: href,
    css: [mainLinkStyle, linkTextMainLinkStyle],
    onClick: onClick
  }, renderLinkText(), children && jsx("span", {
    css: linkTextCardContentStyle
  }, children)));
});
LinkTextCard.displayName = "LinkTextCard";

function _templateObject4$8() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    cursor: inherit;\n    box-shadow: none;\n    input {\n        background-color: ", ";\n        border-color: ", ";\n    }\n    &:hover {\n        border: 2px solid transparent;\n        text-decoration: none;\n    }\n    \n    &:hover {\n        .radiolabel {\n            text-decoration: none;\n        }\n    }\n"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n    color: #464646;\n    width: 100%;\n    font-size: 21px;\n    line-height: 28px;\n    padding: 18px 0; \n    display: flex;\n    user-select: none;\n    margin-right: ", ";\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    width: 2.4rem;\n    height: 2.4rem;\n    vertical-align: middle;\n    border-radius: 50%;\n    border: 2px solid ", ";\n    background: #fff;\n    margin: 0;\n    margin-left: 2.4rem;\n    margin-right: 1.6rem;\n    flex-shrink: 0;\n    \n    &:focus{\n        outline:none!important;\n    }    \n\n    &:checked{\n        outline: none;\n        border: 4px solid ", ";\n        background-color: ", ";\n        position: relative;\n        \n        &+label{ \n            text-decoration: underline;\n            font-weight: 500;\n            color: ", ";\n        } \n\n        &:before{\n            content: \"\";\n            width: 1.6rem;\n            height: 1.6rem;\n            border-radius: 50%;\n            display:block;\n            border: 2px solid #fff;\n            background: transparent;\n            position: absolute;\n            top:-2px;\n            left:-2px;\n        }\n\n        &:disabled {\n            opacity: 1;\n        }\n\n    }\n    &:disabled {\n        opacity: 1;\n    }\n\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n\n    width: 100%;\n    position: relative;\n    border-radius: 0.8rem;\n    border: 2px solid transparent;\n    display:flex;\n    align-items: center;\n    background-color: ", ";\n    &.inputHasValue{\n        border: 2px solid ", ";\n        text-decoration: underline;\n        font-weight: bold;\n    }\n\n    &:hover{\n        border: 2px solid ", ";\n        .radiolabel {\n            text-decoration: underline;\n        }\n    }\n    \n    &:focus-within{\n        .tabnav &{\n            outline-offset: 2px;\n            outline: 3px solid ", ";\n        }\n    }\n    \n\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var fieldWrapper = css(_templateObject$a(), colors.theme3.xLight, colors.theme1.xDark, colors.theme1.mid, colors.states.focus);
var fieldInput = css(_templateObject2$a(), colors.theme1.mid, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.xDark);
var fieldLabel = css(_templateObject3$9(), spacing.m);
var disabledStyle = css(_templateObject4$8(), colors.theme3.mid, colors.theme3.midLight, colors.theme3.light, colors.theme3.mid);

/** @jsx jsx */
var InputRadio = function InputRadio(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      fieldWrapperStyle = _ref.fieldWrapperStyle,
      fieldInputStyle = _ref.fieldInputStyle,
      fieldLabelStyle = _ref.fieldLabelStyle,
      _onChange = _ref.onChange,
      value = _ref.value,
      checked = _ref.checked,
      disabled = _ref.disabled,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      dataQuestion = _ref.dataQuestion,
      dataAnswer = _ref.dataAnswer;
  var inputRef = useRef(null);
  return jsx("div", {
    css: [fieldWrapper, disabled && disabledStyle, fieldWrapperStyle],
    className: "".concat(checked ? "inputHasValue" : "", " ").concat(className)
  }, jsx("label", {
    className: "radiolabel",
    css: [fieldLabel, fieldLabelStyle],
    htmlFor: id
  }, jsx("input", {
    ref: inputRef,
    css: [fieldInput, fieldInputStyle],
    id: id,
    name: name,
    type: "radio",
    tabIndex: tabIndex,
    onChange: function onChange(e) {
      if (_onChange && !document.body.classList.contains('tabnav')) {
        _onChange(e);
      }
    },
    value: value,
    checked: checked,
    disabled: disabled,
    onKeyUp: function onKeyUp(e) {
      //32 == space
      if (e.which === 32 || e.key == 'Enter') {
        _onChange(e);
      }
    },
    "data-question": dataQuestion,
    "data-answer": dataAnswer
  }), labelText));
};

function _templateObject6$8() {
  var data = _taggedTemplateLiteral(["\n  color: #4D4D4D;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin-bottom: .8rem;\n  display: block;\n"]);

  _templateObject6$8 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$8() {
  var data = _taggedTemplateLiteral(["\n\n    position: absolute;\n    right: 2.4rem;\n    bottom: 2.2rem;\n\n"]);

  _templateObject5$8 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$9() {
  var data = _taggedTemplateLiteral([" \n    appearance: none;\n    position: absolute;\n    right: 1.6rem;\n    border: 0px;\n    background-color: transparent;\n    bottom: 1.4rem;\n    width: 2.8rem;\n    height: 2.8rem;\n    padding: 0;\n    svg{\n        fill: ", ";\n        width: 2.8rem;\n        height: 2.8rem;\n    }\n    &:focus{\n        outline: none;\n    }\n    \n"]);

  _templateObject4$9 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n    input {\n        border-color: #F00;\n    }\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 1.2rem ", " 1.2rem 1.6rem;\n    border: 2px solid ", ";\n    border-radius: 0.8rem;\n    font-size: 1.8rem;\n    line-height: 3rem;\n    height: 5.4rem;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n\n    &:focus{\n        outline: none;\n        border-color: ", "\n    }\n\n    &::placeholder, &::-webkit-input-placeholder {\n        font-style: italic;\n        color: ", ";\n    }\n    &::-ms-clear{\n        display:none;\n        width: 0;\n        height: 0; \n    }\n    &::-webkit-search-cancel-button{\n        appearance: none;   \n    }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var InputStyle = function InputStyle(hasInnerContent) {
  return css$1(_templateObject$b(), hasInnerContent ? '4.5rem' : '1.6rem', colors.theme3.midLight, colors.theme1.mid, colors.theme3.mid);
};
var invalidStyle = css$1(_templateObject2$b());
var InputWrapperStyle = css$1(_templateObject3$a());
var ClearInput = css$1(_templateObject4$9(), colors.theme1.mid);
var LoadingStyle = css$1(_templateObject5$8());
var Label = css$1(_templateObject6$8());

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: ", ";\n    height: ", ";\n  \n  &:after {\n    content: \" \";\n    display: block;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    border: ", " solid ", ";\n    border-color: ", " transparent ", " transparent;\n    animation: lds-dual-ring 1.2s linear infinite;\n  }\n  @keyframes lds-dual-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var loaderStyle = function loaderStyle(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.theme2.midLight : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '80px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "80px" : _ref$height,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? "6px" : _ref$border;
  return css(_templateObject$c(), width, height, width, height, border, color, color, color);
};

var Loading = (function (_ref2) {
  var color = _ref2.color,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "small" : _ref2$size,
      style = _ref2.style;
  var sizeStyle = null;

  switch (size) {
    case "small":
      sizeStyle = {
        width: '20px',
        height: '20px',
        border: '3px',
        color: color
      };
  }

  return jsx("div", {
    css: [loaderStyle(sizeStyle), style],
    "aria-busy": "true",
    className: "lds-dual-ring"
  });
});

var InputText = React.forwardRef(function (_ref, _ref2) {
  var style = _ref.style,
      wrapperStyle = _ref.wrapperStyle,
      placeholder = _ref.placeholder,
      id = _ref.id,
      _onChange = _ref.onChange,
      onClear = _ref.onClear,
      validationError = _ref.validationError,
      name = _ref.name,
      disabled = _ref.disabled,
      label = _ref.label,
      _ref$hideLabel = _ref.hideLabel,
      hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      other = _objectWithoutProperties(_ref, ["style", "wrapperStyle", "placeholder", "id", "onChange", "onClear", "validationError", "name", "disabled", "label", "hideLabel", "loading", "type"]);

  var inputRef = useRef();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var invalid = validationError ? invalidStyle : null;
  var innerContent = null;

  if (type == "search" && !loading && text != null && text != "") {
    innerContent = jsx("a", {
      href: "#",
      css: ClearInput,
      className: "noStyle",
      onClick: function onClick(e) {
        e.preventDefault();
        if (inputRef == null || inputRef.current == null) return;
        inputRef.current.value = "";
        setText("");
        inputRef.current.dispatchEvent(new Event('change'));

        if (onClear) {
          onClear(e);
        }
      }
    }, jsx(Clear, null));
  }

  if (loading) {
    innerContent = jsx(Loading, {
      style: LoadingStyle
    });
  }

  return jsx("div", {
    css: [InputWrapperStyle, wrapperStyle, invalid]
  }, label && jsx("label", {
    css: [Label, hideLabel ? VisuallyHidden$1 : null],
    htmlFor: id
  }, label), validationError, jsx("input", _extends({
    ref: function ref(el) {
      inputRef.current = el;
      return typeof _ref2 === 'function' ? _ref2(el) : null;
    },
    css: [InputStyle(innerContent != null), style],
    name: name,
    disabled: disabled,
    placeholder: placeholder,
    id: id,
    onChange: function onChange(e) {
      _onChange(e);

      setText(e.target.value);
    },
    type: type
  }, other)), innerContent);
});

function _templateObject8$7() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    fill:", ";\n    width: 1.6rem;\n    height: 1.6rem;\n    vertical-align: baseline;\n    top: 2px;\n    ", " {\n        top: 0;\n    }\n"]);

  _templateObject8$7 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$7() {
  var data = _taggedTemplateLiteral(["\n    svg {\n        padding-left:.8rem;\n    }\n"]);

  _templateObject7$7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$9() {
  var data = _taggedTemplateLiteral(["\n    svg {\n        padding-right:.8rem;\n     }\n"]);

  _templateObject6$9 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$9() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    color: ", ";\n    svg {\n            fill:", "; \n        }\n    &:hover, &:active, &.selectedButtonStyle {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n    &:disabled {\n        ", "\n    }\n"]);

  _templateObject5$9 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$a() {
  var data = _taggedTemplateLiteral(["\n    &:hover, &:active, &.selectedButtonStyle {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n"]);

  _templateObject4$a = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n    background-color:transparent;\n    color:", ";\n    box-shadow:inset 0px 0px 0px 1px ", ";\n\n    svg {\n        fill: ", ";\n    }\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n        text-decoration:underline;\n        border-color:", ";\n    }\n    &:active {\n        color:", ";\n        background-color:", ";\n        box-shadow:none;\n        svg {\n            fill:", "; \n        }\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n    text-decoration: none;\n    text-align: center;\n    display: inline-block;\n    font-size:1.6rem;\n    line-height:2.4rem;\n    font-weight:500;\n    padding: .8rem 2.4rem;\n    color: ", ";\n    border-radius:.8rem;\n    width:100%;\n    box-sizing: border-box;\n    cursor:pointer;\n    background-color:", ";\n\n    svg {\n        fill: ", ";\n        flex-shrink: 0;\n    }\n\n    ", "{\n        font-size:2.1rem;\n        line-height:2.4rem;\n        width:auto;\n        padding:1.6rem 2.4rem;\n    }\n\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:active{\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral([" \n    color: ", ";\n    background-color: ", ";\n    text-decoration:none;\n    box-shadow:none;\n    cursor:inherit;\n    svg {\n        fill:", ";\n    }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var disabled = css(_templateObject$d(), colors.theme3.mid, colors.theme3.midLight, colors.theme3.mid);
var buttonStyle = css(_templateObject2$c(), colors.common.white, colors.buttons.primary.backgroundColor, colors.common.white, medium, colors.buttons.primary.hover, colors.buttons.primary.active, disabled);
var secondaryStyle = css(_templateObject3$b(), colors.buttons.secondary.textColor, colors.buttons.secondary.borderColor, colors.buttons.secondary.textColor, colors.buttons.secondary.hover, colors.theme1.xDark, colors.common.white, colors.buttons.secondary.active, colors.common.white, disabled);
var invertedBackgroundStyle = css(_templateObject4$a(), colors.common.white, colors.theme1.dark);
var invertedSecondaryBackgroundStyle = css(_templateObject5$9(), colors.common.white, colors.common.white, colors.common.white, colors.common.white, colors.theme1.midDark, colors.theme1.dark, disabled);
var buttonIconLeft = css(_templateObject6$9());
var buttonIconRight = css(_templateObject7$7());
var iconStyle$2 = css(_templateObject8$7(), colors.common.white, medium);

var Button = function Button(_ref) {
  var text = _ref.text,
      _ref$secondaryButtonS = _ref.secondaryButtonStyle,
      secondaryButtonStyle = _ref$secondaryButtonS === void 0 ? false : _ref$secondaryButtonS,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      className = _ref.className,
      id = _ref.id,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "submit" : _ref$type,
      selected = _ref.selected,
      disabled = _ref.disabled,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      style = _ref.style,
      reference = _ref.reference,
      onClick = _ref.onClick,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["text", "secondaryButtonStyle", "invertedBackgroundColor", "className", "id", "type", "selected", "disabled", "iconLeft", "iconRight", "style", "reference", "onClick", "href"]);

  var styles = [buttonStyle];
  var cssClass = [className];
  secondaryButtonStyle && styles.push(secondaryStyle);
  invertedBackgroundColor && styles.push(invertedBackgroundStyle);
  selected && cssClass.push("selectedButtonStyle");
  href && cssClass.push("noStyle");
  invertedBackgroundColor && secondaryButtonStyle && styles.push(invertedSecondaryBackgroundStyle);
  iconLeft && styles.push(buttonIconLeft);
  iconRight && styles.push(buttonIconRight);
  var ariaAttrs = {};
  Object.keys(other).filter(function (x) {
    return x.startsWith("aria-");
  }).forEach(function (x) {
    return ariaAttrs[x] = other[x];
  });
  style && styles.push(style);

  var props = _objectSpread2({
    "id": id,
    "css": styles,
    "className": cssClass.join(" "),
    "disabled": disabled,
    "onClick": onClick,
    "ref": reference,
    "type": href !== null ? null : type,
    "href": href || null
  }, ariaAttrs);

  return href ? jsx("a", props, iconLeft, text, iconRight) : jsx("button", props, iconLeft, text, iconRight);
};

function _templateObject8$8() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.8rem;\n    line-height: 3.2rem;\n    margin-bottom: 0.8rem;\n    display: block;\n"]);

  _templateObject8$8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$8() {
  var data = _taggedTemplateLiteral(["\n\n    appearance: none;\n    position: absolute;\n    right: 0px;\n    border: 0px;\n    background-color: transparent;\n    top: 0.55rem;\n    width: 2.8rem;\n    height: 2.8rem;\n    padding: 0;\n    right: 1.6rem;\n    svg{\n        fill: ", ";\n        width: 2.8rem;\n        height: 2.8rem;\n    }\n    &:focus{\n        outline: none;\n    }\n\n    ", " {\n        top: 1.6rem;\n        right: 1.6rem;\n    }\n\n"]);

  _templateObject7$8 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$a() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:none;\n    &:hover, &:active {\n        box-shadow:none;\n    }\n"]);

  _templateObject6$a = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$a() {
  var data = _taggedTemplateLiteral(["\n    white-space: nowrap;\n    width:auto;\n    align-items: center;\n    border-radius: 0 .8rem .8rem 0;\n    margin-right:-.8rem;\n    padding: .8rem 1.6rem;\n    vertical-align: text-top;\n"]);

  _templateObject5$a = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$b() {
  var data = _taggedTemplateLiteral(["\n    -webkit-appearance: none;\n    background-color: ", ";\n    border-radius: .8rem 0 0 .8rem;\n    border:none;\n    font-size:1.6rem;\n    line-height:2rem;\n    display:flex;\n    flex-grow:1;\n    padding: ", " 4.5rem ", " ", ";\n    color: ", ";\n    border: 2px solid #fff;\n    font-style: normal;\n    font-weight: 500;\n    box-sizing: border-box;\n    width: 100%; \n\n    &::-webkit-search-cancel-button{\n        appearance: none;\n    }\n\n    ", "{\n        font-size:1.8rem;\n        line-height:3.2rem;\n        padding: 1.2rem 6.4rem 1.2rem 1.6rem;\n    }\n\n    &:hover {\n        border: 2px solid ", ";\n    }\n    &:active {\n        border: 2px solid ", ";\n    }\n    &::placeholder {\n        font-style:italic;\n        color: ", ";\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject4$b = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    flex-grow:1;\n    position: relative;\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    display:flex;\n    flex-direction: row;\n    align-items: stretch;\n    background-color: ", ";\n    margin-right:.8rem;\n    border-radius:.8rem;\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral([" \n        background-color: ", ";\n        text-decoration:none;\n        box-shadow:inset 0px 0px 0px 1px ", ";\n        cursor:inherit;\n        &::placeholder {\n            color: ", ";\n        }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var disabled$1 = css(_templateObject$e(), colors.theme3.xLight, colors.theme3.midLight, colors.theme3.midLight);
var searchWrapperStyle = css(_templateObject2$d(), colors.common.white);
var searchFieldInputWrapperStyles = css(_templateObject3$c());
var searchFieldInputStyle = css(_templateObject4$b(), colors.common.white, spacing.xs, spacing.xs, spacing.s, colors.theme1.xDark, medium, colors.theme1.mid, colors.theme1.xDark, colors.theme3.midDark, disabled$1);
var searchFieldButtonStyle = css(_templateObject5$a());
var invertedBackgroundStyle$1 = css(_templateObject6$a());
var clearInputStyle = css(_templateObject7$8(), colors.theme1.mid, medium);
var labelStyle = css(_templateObject8$8());

var FormSearchField = React.forwardRef(function (_ref, _ref2) {
  var className = _ref.className,
      icon = _ref.icon,
      fieldtext = _ref.fieldtext,
      labeltext = _ref.labeltext,
      _ref$showLabel = _ref.showLabel,
      showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
      onClick = _ref.onClick,
      onClear = _ref.onClear,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      buttontext = _ref.buttontext,
      style = _ref.style,
      disabled = _ref.disabled,
      type = _ref.type,
      inputtype = _ref.inputtype,
      value = _ref.value,
      name = _ref.name,
      id = _ref.id,
      autocomplete = _ref.autocomplete,
      validationError = _ref.validationError,
      other = _objectWithoutProperties(_ref, ["className", "icon", "fieldtext", "labeltext", "showLabel", "onClick", "onClear", "onChange", "onBlur", "invertedBackgroundColor", "buttontext", "style", "disabled", "type", "inputtype", "value", "name", "id", "autocomplete", "validationError"]);

  var styles = [searchWrapperStyle];
  style && styles.push(style);
  var searchFieldInputStyles = [searchFieldInputStyle];
  invertedBackgroundColor && searchFieldInputStyles.push(invertedBackgroundStyle$1);
  var inputRef = useRef();
  var ariaAttrs = {};
  Object.keys(other).filter(function (x) {
    return x.startsWith("aria-");
  }).forEach(function (x) {
    return ariaAttrs[x] = other[x];
  });
  return jsx(React.Fragment, null, jsx("label", {
    css: showLabel ? labelStyle : VisuallyHidden$1,
    htmlFor: id || name
  }, labeltext || fieldtext), validationError, jsx("div", {
    css: [styles],
    className: className,
    role: "search"
  }, jsx("div", {
    css: searchFieldInputWrapperStyles
  }, jsx("input", _extends({}, other, {
    onChange: onChange,
    onBlur: onBlur,
    id: id || name,
    ref: function ref(el) {
      inputRef.current = el;
      return typeof _ref2 === 'function' ? _ref2(el) : null;
    },
    type: inputtype || "search",
    placeholder: fieldtext,
    disabled: disabled,
    value: value,
    name: name,
    autoComplete: autocomplete,
    css: [searchFieldInputStyles]
  })), inputRef && inputRef.current && inputRef.current.value.length > 0 && jsx("a", {
    href: "#",
    css: clearInputStyle,
    className: "noStyle",
    onClick: function onClick(e) {
      e.preventDefault();
      if (inputRef == null || inputRef.current == null) return;
      inputRef.current.value = "";
      inputRef.current.dispatchEvent(new Event('change'));

      if (onClear) {
        onClear(e);
      }
    }
  }, jsx(Clear, null))), jsx(Button, {
    style: searchFieldButtonStyle,
    disabled: disabled,
    onClick: onClick,
    iconLeft: icon,
    text: buttontext //{...ariaAttrs}

  })));
});

function _templateObject4$c() {
  var data = _taggedTemplateLiteral(["\n    textarea {\n        border-color: #F00;\n    }\n"]);

  _templateObject4$c = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$d() {
  var data = _taggedTemplateLiteral(["\n  color: #4D4D4D;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin-bottom: .8rem;\n  display: block;\n"]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box;\n    border: 2px solid #979797;\n    font-family: Arial;\n    border-radius: 0.8rem;\n    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */\n    font-size: 1.8rem;\n    line-height: 3rem;\n    -webkit-appearance: textfield; /* safari fix */\n    margin-bottom: 2.4rem;\n    max-width: 100%;\n    min-width: 100%;\n\n    &:focus{\n        outline: none;\n        border-color: ", "\n    }\n\n    &::-webkit-search-cancel-button{\n        appearance: none;\n    }\n    &::placeholder, &::-webkit-input-placeholder {\n        font-style:italic;\n        color: ", ";\n    }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var TextAreaStyle = css$1(_templateObject$f(), colors.theme1.mid, colors.theme3.mid);
var TextAreaWrapperStyle = css$1(_templateObject2$e());
var Label$1 = css$1(_templateObject3$d());
var invalidStyle$1 = css$1(_templateObject4$c());

var TextArea = function TextArea(_ref) {
  var style = _ref.style,
      wrapperStyle = _ref.wrapperStyle,
      placeholder = _ref.placeholder,
      text = _ref.text,
      id = _ref.id,
      _onChange = _ref.onChange,
      onClear = _ref.onClear,
      validationError = _ref.validationError,
      name = _ref.name,
      disabled = _ref.disabled,
      _ref$hiddenLabel = _ref.hiddenLabel,
      hiddenLabel = _ref$hiddenLabel === void 0 ? false : _ref$hiddenLabel,
      label = _ref.label,
      other = _objectWithoutProperties(_ref, ["style", "wrapperStyle", "placeholder", "text", "id", "onChange", "onClear", "validationError", "name", "disabled", "hiddenLabel", "label"]);

  var inputRef = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      addedText = _useState2[0],
      setText = _useState2[1];

  var invalid = validationError ? invalidStyle$1 : null;
  return jsx("div", {
    css: [TextAreaWrapperStyle, wrapperStyle, invalid]
  }, label && jsx("label", {
    css: [Label$1, hiddenLabel ? VisuallyHidden$1 : null],
    htmlFor: id || name
  }, label), validationError, jsx("textarea", _extends({
    rows: "2",
    id: id,
    ref: inputRef
  }, other, {
    css: [TextAreaStyle, style],
    name: name,
    disabled: disabled,
    placeholder: placeholder,
    onChange: function onChange(e) {
      _onChange(e);

      setText(e.target.value);
    }
  }), addedText));
};

function _templateObject5$b() {
  var data = _taggedTemplateLiteral(["\n    &:hover + label {\n        background-color:", ";\n        color: ", ";\n    }\n    &:checked + label {\n        background-color:", ";\n    }\n    \n"]);

  _templateObject5$b = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$d() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n        background-color:", ";\n    }\n"]);

  _templateObject4$d = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$e() {
  var data = _taggedTemplateLiteral(["\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  .checkbox-label {\n    font-size: 2.1rem;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  .checkbox + .checkbox-label:before {\n    content: '';\n    background: #fff;\n    border-radius: 2px;\n    border: 1px solid ", ";\n    display: inline-block;\n    vertical-align: middle;\n    width: 32px;\n    height: 32px;\n    margin-right: 1.6rem;\n  }\n\n  .checkbox:checked + .checkbox-label {\n    text-decoration: underline;\n    color: ", ";\n    box-shadow:  0px 0px 0px 5px ", ";\n    background-color: ", ";\n  }\n\n  .checkbox {\n    &:checked + label:before {\n      background: ", ";\n      border: 1px solid ", ";\n    }\n  }\n\n  .tabnav & .checkbox:focus + .checkbox-label {\n    outline: ", " solid 2px;\n    outline-offset: 2px;\n    box-shadow: none;\n  }\n\n  .checkbox:hover + .checkbox-label {\n    box-shadow:  0px 0px 0px 5px ", ";\n    background-color: ", ";\n    text-decoration: underline;\n  }\n\n  .checkbox:checked + .checkbox-label:before {\n    animation: fadein .2s ease-out;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='", "' d='", "'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 100px 100px;\n    background-position: 6px 8px;\n    position: relative;\n  }\n  @keyframes fadein {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteral([" \n    font-size: 2.1rem;\n    line-height: 3.2rem;\n    border-radius: .8px;\n    display: inline-block;\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral([" \n    position: relative;\n    display: inline-block;\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var wrapperStyle = css(_templateObject$g());
var labelStyle$1 = css(_templateObject2$f());
var checkbox = css(_templateObject3$e(), colors.theme1.mid, colors.theme1.dark, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.dark, colors.theme1.mid, colors.states.focus, colors.theme1.midLight, colors.theme1.midLight, encodeURIComponent('#fff'), checkPath);
var invertedLabelStyle = css(_templateObject4$d(), colors.common.white);
var invertedfieldStyle = css(_templateObject5$b(), colors.common.white, colors.theme1.xDark, colors.common.white);

/** @jsx jsx */
var FormCheckbox = function FormCheckbox(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      value = _ref.value,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      style = _ref.style;
  var labelStyles = [labelStyle$1];

  if (invertedBackgroundColor) {
    labelStyles.push(invertedLabelStyle);
  }

  style && labelStyles.push(style);
  return jsx("div", {
    css: [wrapperStyle, checkbox],
    "data-checked": checked
  }, jsx("input", {
    id: id,
    name: name,
    type: "checkbox",
    className: "checkbox",
    value: value,
    onChange: onChange,
    checked: checked
  }), jsx("label", {
    htmlFor: id,
    css: [labelStyles],
    className: "checkbox-label"
  }, labelText));
};

function _templateObject5$c() {
  var data = _taggedTemplateLiteral(["\n    &:hover + label {\n        background-color:", ";\n        color: ", ";\n    }\n    &:checked + label {\n        background-color:", ";\n    }\n    \n"]);

  _templateObject5$c = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$e() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n        background-color:", ";\n    }\n"]);

  _templateObject4$e = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$f() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top:.8rem;\n    left:.8rem;\n    appearance: none;\n    height:3.2rem;\n    width:3.2rem;\n    border:solid 1px ", ";\n    border-radius:.2rem;\n    background-color:", ";\n    margin:0;\n    border-radius:50%;\n\n    &:checked {\n        border-color:", ";\n    }\n    &:checked::before{\n        content: '';\n        display: block;\n        background-color:", ";\n        position: absolute;\n        height:2.2rem;\n        width:2.2rem;\n        left: calc(50% - 1.1rem);\n        top: calc(50% - 1.1rem);\n        border-radius:50%;\n   }\n   &:hover + label{\n    background-color:", ";\n    text-decoration:underline;\n   }\n   &:checked + label {\n    background-color:", ";\n    color:", ";\n    text-decoration:underline;\n   }\n"]);

  _templateObject3$f = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteral([" \n    font-size:2.1rem;\n    line-height:3.2rem;\n    padding:.8rem .8rem .8rem 5.6rem;\n    border-radius:.8rem;\n    display:inline-block;\n    &:hover {\n        background-color:", ";\n        text-decoration:underline;\n    }\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteral([" \n    position:relative;\n    display:inline-block;\n\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var wrapperStyle$1 = css(_templateObject$h());
var labelStyle$2 = css(_templateObject2$g(), colors.theme1.light);
var fieldStyle = css(_templateObject3$f(), colors.theme1.mid, colors.common.white, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.light, colors.theme1.light, colors.theme1.xDark);
var invertedLabelStyle$1 = css(_templateObject4$e(), colors.common.white);
var invertedfieldStyle$1 = css(_templateObject5$c(), colors.common.white, colors.theme1.xDark, colors.common.white);

/** @jsx jsx */
var FormRadiobutton = function FormRadiobutton(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      value = _ref.value,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      style = _ref.style;
  var fieldStyles = [fieldStyle];
  var labelStyles = [labelStyle$2];

  if (invertedBackgroundColor) {
    labelStyles.push(invertedLabelStyle$1);
    fieldStyles.push(invertedfieldStyle$1);
  }

  style && labelStyles.push(style);
  return jsx(React.Fragment, null, jsx("div", {
    css: wrapperStyle$1
  }, jsx("input", {
    id: id,
    name: name,
    type: "radio",
    css: [fieldStyles],
    value: value,
    onChange: onChange,
    checked: checked
  }), jsx("label", {
    htmlFor: id,
    css: [labelStyles]
  }, labelText)));
};

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-size: 1.4rem;\n  svg {\n    align-content: center;\n    flex-shrink: 0;\n    margin-right: 0.4rem;\n    fill: ", ";\n  }\n  p {\n    line-height: 2.4rem;\n    padding-bottom: 0;\n  }\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$3 = function wrapper(success) {
  return css$1(_templateObject$i(), success ? colors.common.success : colors.common.warning, success ? colors.common.success : colors.common.warning);
};

/** @jsx jsx */

var ValidationResponse = function ValidationResponse(_ref) {
  var _ref$success = _ref.success,
      success = _ref$success === void 0 ? false : _ref$success,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      children = _ref.children;
  return jsx("div", {
    css: wrapper$3(success)
  }, success ? jsx(Check, null) : jsx(Clear, null), text, children);
};

function _templateObject4$f() {
  var data = _taggedTemplateLiteral(["\n    select {\n        border-color: #F00;\n    }\n"]);

  _templateObject4$f = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$g() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n"]);

  _templateObject3$g = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteral(["\n  color: #4D4D4D;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin-bottom: .8rem;\n  display: block;\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n    appearance: none;\n    width: 100%;\n    padding: 1.2rem 1.6rem;\n    box-sizing:border-box;\n    border: 2px solid ", ";\n    border-radius: 0.8rem;\n    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */\n    font-size: 1.8rem;\n    line-height: 3rem;\n    background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><path fill='", "' d='", "' /></svg>\");\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: 1.6em auto, 100%;\n    &[data-hasvalue=\"false\"]{\n        color: ", ";    \n    }\n\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var selectStyle = css(_templateObject$j(), colors.theme3.midLight, encodeURIComponent(colors.theme1.mid), arrowPath, colors.theme3.dark);
var labelStyle$3 = css(_templateObject2$h());
var selectWrapperStyle = css(_templateObject3$g());
var invalidStyle$2 = css(_templateObject4$f());

var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
      id = _ref.id,
      _onChange = _ref.onChange,
      validationError = _ref.validationError,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["label", "id", "onChange", "validationError", "children"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var invalid = validationError ? invalidStyle$2 : null;
  return jsx("div", {
    css: [selectWrapperStyle, invalid]
  }, label && jsx("label", {
    css: labelStyle$3,
    htmlFor: id
  }, label), validationError, jsx("select", _extends({
    id: id,
    css: selectStyle,
    "data-hasvalue": !!value,
    value: value || "",
    onChange: function onChange(e) {
      setValue(e.target.value);

      if (_onChange) {
        _onChange(e);
      }
    }
  }, other), children));
};

function _templateObject8$9() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(180deg);\n"]);

  _templateObject8$9 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$9() {
  var data = _taggedTemplateLiteral(["\n    width:2.4rem;\n    height:2.4rem;\n    position: relative;\n    top: 3px;\n"]);

  _templateObject7$9 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$b() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    color: ", ";\n    svg {\n            fill:", "; \n        }\n    &:hover, &:active {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:hover {\n        background-color:", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n    &:disabled {\n        ", "\n    }\n"]);

  _templateObject6$b = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$d() {
  var data = _taggedTemplateLiteral(["\n    &:hover, &:active {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n"]);

  _templateObject5$d = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$g() {
  var data = _taggedTemplateLiteral(["\n    background-color:transparent;\n    color:", ";\n    box-shadow:inset 0px 0px 0px 1px ", ";\n\n    svg {\n        fill:", "; \n    }\n    &:hover {\n        background-color:", ";\n        text-decoration:underline;\n        border-color:", ";\n    }\n    &:active {\n        color:", ";\n        background-color:", ";\n        box-shadow:none;\n        svg {\n            fill:", "; \n        }\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject4$g = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$h() {
  var data = _taggedTemplateLiteral(["\n\n    padding: .8rem .8rem !important;\n    font-size: 1.6rem !important;\n    span{\n        padding-right: .2rem;\n    }\n    svg{\n        top: 1px;\n    }\n    &[aria-expanded=\"true\"]{\n        svg{\n            top: -1px;\n        }\n    }\n\n"]);

  _templateObject3$h = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteral(["\n    font-size:1.6rem;\n    line-height:2.4rem;\n    font-weight:500;\n    padding:.8rem;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    \n    color: ", ";\n    border-radius:3.2rem;\n    width:100%;\n    cursor:pointer;\n    background-color:", ";\n\n    span{\n        padding-right: .8rem;\n    }\n    svg {\n        fill: ", ";\n    }\n\n    ", "{\n        /*width:auto;*/\n        font-size:2.1rem;\n        padding:1.6rem 2.4rem;\n    }\n\n    &:hover {\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:active{\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteral([" \n    color: ", ";\n    background-color: ", ";\n    text-decoration:none;\n    box-shadow:none;\n    cursor:inherit;\n    svg {\n        fill:", ";\n    }\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var disabled$2 = css(_templateObject$k(), colors.theme3.mid, colors.theme3.midLight, colors.theme3.mid);
var expandButtonStyle = css(_templateObject2$i(), colors.common.white, colors.theme1.mid, colors.common.white, medium, colors.theme1.midDark, colors.theme1.xDark, disabled$2);
var smallStyle = css(_templateObject3$h());
var secondaryStyle$1 = css(_templateObject4$g(), colors.theme1.mid, colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.common.white, colors.theme1.xDark, colors.common.white, disabled$2);
var invertedBackgroundStyle$2 = css(_templateObject5$d(), colors.common.white, colors.theme1.dark);
var invertedSecondaryBackgroundStyle$1 = css(_templateObject6$b(), colors.common.white, colors.common.white, colors.common.white, colors.common.white, colors.theme1.midDark, colors.theme1.dark, disabled$2);
var iconStyle$3 = css(_templateObject7$9());
var expandedIconStyle = css(_templateObject8$9());

/** @jsx jsx */
var ExpandButton = function ExpandButton(_ref) {
  var text = _ref.text,
      _ref$secondaryButtonS = _ref.secondaryButtonStyle,
      secondaryButtonStyle = _ref$secondaryButtonS === void 0 ? false : _ref$secondaryButtonS,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      className = _ref.className,
      id = _ref.id,
      disabled = _ref.disabled,
      style = _ref.style,
      onClick = _ref.onClick;
  var styles = [expandButtonStyle];
  secondaryButtonStyle && styles.push(secondaryStyle$1);
  small && styles.push(smallStyle);
  style && styles.push(style);
  return jsx("button", {
    id: id,
    css: styles,
    className: className,
    disabled: disabled,
    "aria-expanded": expanded ? "true" : "false",
    onClick: onClick
  }, jsx("span", null, text), jsx(Arrow, {
    "aria-hidden": "true",
    style: [iconStyle$3, expanded && expandedIconStyle]
  }));
};

function _templateObject8$a() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n    h3 {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject8$a = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$a() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  padding-bottom: 0;\n"]);

  _templateObject7$a = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$c() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: .8rem;\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: ", ";\n"]);

  _templateObject6$c = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$e() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding-bottom: ", ";\n  text-decoration: underline;\n  font-weight: 700;\n  display: block;\n  padding-top: .4rem;\n"]);

  _templateObject5$e = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$h() {
  var data = _taggedTemplateLiteral(["\n  color: ", " !important;\n  text-decoration: none !important;\n"]);

  _templateObject4$h = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$i() {
  var data = _taggedTemplateLiteral(["\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none !important;\n"]);

  _templateObject3$i = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  padding-bottom: 0.8rem;\n  line-height: 2.4rem;\n  color: ", ";\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: -", ";\n  margin-right: -", ";\n  padding-left: ", ";\n  padding-right: ", ";\n\n  p {\n    color: ", ";\n  }\n  p.listItemHeadline {\n      color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    p {\n      text-decoration: none;\n    }\n  }\n  &:active {\n    background-color: ", ";\n    .listItemHeadline {\n      color: ", ";\n    }\n    p {\n      text-decoration: none;\n    }\n  }\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$4 = css(_templateObject$l(), spacing.xs, spacing.xs, spacing.xs, spacing.xs, colors.theme3.dark, colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark);
var news = css(_templateObject2$j(), colors.theme3.dark);
var disabled$3 = css(_templateObject3$i());
var headlineDisabled = css(_templateObject4$h(), colors.theme3.midDark);
var headline = css(_templateObject5$e(), spacing.m, spacing.xs);
var preambleStyle = css(_templateObject6$c(), colors.theme3.dark);
var bottomText = css(_templateObject7$a(), colors.theme3.mid);
var invertedLink = css(_templateObject8$a(), colors.common.white, colors.common.white, colors.theme1.xDark);

/** @jsx jsx */
var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      headline$1 = _ref.headline,
      preamble = _ref.preamble,
      bottomText$1 = _ref.bottomText,
      type = _ref.type,
      reviewedDate = _ref.reviewedDate,
      href = _ref.href,
      headlineLevel = _ref.headlineLevel,
      headlineStyleLevel = _ref.headlineStyleLevel,
      style = _ref.style,
      invertedLinkStyle = _ref.invertedLinkStyle,
      onClick = _ref.onClick;
  return jsx("a", {
    css: [wrapper$4, invertedLinkStyle && invertedLink, style],
    className: "noStyle",
    href: href,
    onClick: onClick
  }, type && jsx("p", {
    css: news
  }, type.toUpperCase(), reviewedDate && jsx(React.Fragment, null, ": ", jsx(DateFormat, {
    date: reviewedDate,
    showDate: true
  }))), jsx("p", {
    css: headline,
    className: "listItemHeadline"
  }, headline$1), children, preamble && jsx("p", {
    css: preambleStyle
  }, preamble), bottomText$1 && jsx("p", {
    css: bottomText
  }, bottomText$1));
};

function _templateObject8$b() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n    h3 {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject8$b = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$b() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  padding-bottom: 0;\n"]);

  _templateObject7$b = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$d() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: .8rem;\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: ", ";\n"]);

  _templateObject6$d = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$f() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding-bottom: ", ";\n  text-decoration: underline;\n  font-weight: 700;\n  display: block;\n  padding-top: .4rem;\n"]);

  _templateObject5$f = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$i() {
  var data = _taggedTemplateLiteral(["\n  color: ", " !important;\n  text-decoration: none !important;\n"]);

  _templateObject4$i = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$j() {
  var data = _taggedTemplateLiteral(["\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none !important;\n"]);

  _templateObject3$j = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  padding-bottom: 0.8rem;\n  line-height: 2.4rem;\n  color: ", ";\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  text-decoration: none;\n  font-weight: 500;\n  p {\n    color: ", ";\n  }\n  p.listItemHeadline {\n      color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    p {\n      text-decoration: none;\n    }\n  }\n  &:active {\n    background-color: ", ";\n    .listItemHeadline {\n      color: ", ";\n    }\n    p {\n      text-decoration: none;\n    }\n  }\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$5 = css(_templateObject$m(), colors.theme3.dark, colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark);
var news$1 = css(_templateObject2$k(), colors.theme3.dark);
var disabled$4 = css(_templateObject3$j());
var headlineDisabled$1 = css(_templateObject4$i(), colors.theme3.midDark);
var headline$1 = css(_templateObject5$f(), spacing.m, spacing.xs);
var preambleStyle$1 = css(_templateObject6$d(), colors.theme3.dark);
var bottomText$1 = css(_templateObject7$b(), colors.theme3.mid);
var invertedLink$1 = css(_templateObject8$b(), colors.common.white, colors.common.white, colors.theme1.xDark);

/** @jsx jsx */
var ListItemDisabled = function ListItemDisabled(_ref) {
  var children = _ref.children,
      headline = _ref.headline,
      preamble = _ref.preamble,
      bottomText = _ref.bottomText,
      type = _ref.type,
      reviewedDate = _ref.reviewedDate,
      href = _ref.href,
      headlineLevel = _ref.headlineLevel,
      headlineStyleLevel = _ref.headlineStyleLevel,
      style = _ref.style,
      invertedLinkStyle = _ref.invertedLinkStyle,
      disabled = _ref.disabled;
  return jsx("div", {
    css: [wrapper$5, invertedLinkStyle && invertedLink$1, disabled$4, style] // className='noStyle'
    // tabIndex={disabled ? '-1' : null}
    // href={href}

  }, type && jsx("p", {
    css: news$1
  }, type.toUpperCase(), reviewedDate && jsx(React.Fragment, null, ": ", jsx(DateFormat, {
    date: reviewedDate,
    showDate: true
  }))), jsx("p", {
    css: [headlineDisabled$1, headline$1],
    className: "listItemHeadline"
  }, headline), children, preamble && jsx("p", {
    css: preambleStyle$1
  }, preamble), bottomText && jsx("p", {
    css: bottomText$1
  }, bottomText));
};

function _templateObject6$e() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 1.8rem;\n  line-height: ", ";\n  ", " {\n    margin-left: ", ";\n  }\n\n"]);

  _templateObject6$e = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$g() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  padding-right: 0;\n  margin-top: ", ";\n  ", " {\n    padding-right: ", ";\n    justify-content: flex-end;\n  }\n"]);

  _templateObject5$g = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$j() {
  var data = _taggedTemplateLiteral(["\n  border: solid ", ";\n  border-width: 0px 8px 3px;\n  border-radius: 8px;\n  margin-top: -1px;\n  background-color:", ";\n  color: ", " !important;\n  :hover {\n    background-color:", " !important;\n  }\n"]);

  _templateObject4$j = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$k() {
  var data = _taggedTemplateLiteral(["\n  color: ", " !important;\n"]);

  _templateObject3$k = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$l() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: ", ";\n  line-height: ", ";\n  margin-right: ", ";\n  ", " {\n    font-size: ", ";\n    line-height: ", ";\n  }\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: ", ";\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var alphabetWrapper = css(_templateObject$n(), spacing.l);
var letter = css(_templateObject2$l(), spacing.l, spacing.xl, spacing.s, medium, spacing.m, spacing.l);
var invalidLetter = css(_templateObject3$k(), colors.theme3.midDark);
var activeLetter = css(_templateObject4$j(), colors.theme1.dark, colors.theme1.dark, colors.common.white, colors.theme1.dark);
var linkShowAllWrapper = css(_templateObject5$g(), spacing.s, medium, spacing.l);
var linkShowAll = css(_templateObject6$e(), spacing.l, medium, spacing.s);

/** @jsx jsx */
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'];

var isVisibleLetter = function isVisibleLetter(visibleLetters, letter) {
  return visibleLetters && Array.isArray(visibleLetters) && visibleLetters.some(function (v) {
    return v === letter;
  });
};

var DisplayAlphabet = function DisplayAlphabet(_ref) {
  var onClickLetter = _ref.onClickLetter,
      onClickShowAll = _ref.onClickShowAll,
      activeLetter$1 = _ref.activeLetter,
      visibleLetters = _ref.visibleLetters,
      _ref$displayShowAllLi = _ref.displayShowAllLink,
      displayShowAllLink = _ref$displayShowAllLi === void 0 ? true : _ref$displayShowAllLi;
  return jsx(React.Fragment, null, jsx("div", {
    css: alphabetWrapper
  }, alphabet.map(function (letter$1) {
    return isVisibleLetter(visibleLetters, letter$1) ? jsx("a", {
      key: letter$1,
      css: [letter, letter$1 === activeLetter$1 ? activeLetter : null],
      href: visibleLetters.some(function (v) {
        return v === letter$1;
      }) ? "?letter=".concat(letter$1) : "/",
      "data-letter": letter$1,
      onClick: onClickLetter
    }, letter$1) : jsx("span", {
      key: letter$1,
      css: [letter, invalidLetter]
    }, letter$1);
  })), displayShowAllLink && jsx("div", {
    css: linkShowAllWrapper
  }, jsx("a", {
    css: linkShowAll,
    href: "?letter=alla",
    onClick: onClickShowAll
  }, "Visa Alla A-\xD6")));
};

function _templateObject7$c() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    svg {\n\n\n\n\n\n\n\n        position: relative;\n\n\n\n\n\n\n\n        top: 1px;        \n\n\n\n\n\n\n\n        left: 8px;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject7$c = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$f() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    margin-top: ", ";\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        margin-top: 0;\n\n\n\n\n\n\n\n        display: inline-block;\n\n\n\n\n\n\n\n        flex-grow: 1;\n\n\n\n\n\n\n\n        text-align: right;\n\n\n\n\n\n\n\n        font-size: 1.8rem;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject6$f = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$h() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    font-size: 1.6rem;\n\n\n\n\n\n\n\n    width: 7.2rem;\n\n\n\n\n\n\n\n    height: 4rem;\n\n\n\n\n\n\n\n    margin-left: ", ";\n\n\n\n\n\n\n\n    margin-bottom: ", ";\n\n\n\n\n\n\n\n    padding: 0 ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    &:first-of-type {\n\n\n\n\n\n\n\n        margin-left: 0;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        font-size: 1.6rem;\n\n\n\n\n\n\n\n        width: 7.2rem;\n\n\n\n\n\n\n\n        padding: 0 ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        &:first-of-type {\n\n\n\n\n\n\n\n            margin-left: ", ";\n\n\n\n\n\n\n\n        }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        margin-left: ", ";\n\n\n\n\n\n\n\n        margin-bottom: 0;\n\n\n\n\n\n\n\n        margin-top: -.4rem;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject5$h = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$k() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    flex-direction: column;\n\n\n\n\n\n\n\n    display: flex;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        flex-direction: row;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject4$k = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$l() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    p {\n\n\n\n\n\n\n\n        padding-bottom: 0;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    display: flex;\n\n\n\n\n\n\n\n    flex-direction: column;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        flex-direction: row;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject3$l = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$m() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    p {\n\n\n\n\n\n\n\n        padding-bottom: 0;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    padding-bottom: ", ";\n\n\n\n\n\n\n\n    padding-top: ", ";\n\n\n\n\n\n\n\n    border-bottom: .1rem solid ", ";\n\n\n\n\n\n\n\n    display: flex;\n\n\n\n\n\n\n\n    flex-direction: column;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        flex-direction: row;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject2$m = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    box-shadow: 0 1px 3px 0px rgba(0,0,0,0.06);\n\n\n\n\n\n\n\n    padding: ", " ", " ", " ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        padding: ", " ", " ", " ", ";\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    a {\n\n\n\n\n\n\n\n        font-size: 1.8rem;\n\n\n\n\n\n\n\n        line-height: ", ";\n\n\n\n\n\n\n\n        margin-right: ", ";\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    background-color: ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        p > a {\n\n\n\n\n\n\n\n            margin-bottom: 0;\n\n\n\n\n\n\n\n        }\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    margin-bottom: ", ";\n\n\n\n\n\n\n\n    border-radius: ", ";\n\n\n\n\n\n\n\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var sourceStyle = css(_templateObject$o(), spacing.s, spacing.s, spacing.m, spacing.s, medium, spacing.m, spacing.l, spacing.m, spacing.l, spacing.l, spacing.s, colors.theme1.light, medium, spacing.s, spacing.xs);
var firstRow = css(_templateObject2$m(), spacing.s, spacing.m, colors.theme3.midLight, medium);
var firstRowUsabilla = css(_templateObject3$l(), medium);
var secondRow = css(_templateObject4$k(), medium);
var buttonStyle$1 = css(_templateObject5$h(), spacing.m, spacing.s, spacing.m, medium, spacing.m, spacing.m, spacing.m);
var rightAlign = css(_templateObject6$f(), spacing.xs, medium);
var sourceLink = css(_templateObject7$c());

var isExternal = (function (baseUrl, url) {
  var matchInternal = new RegExp("^(\/)|(" + baseUrl + ")", "i");

  if (typeof url == 'undefined' || url == "#") {
    return false;
  } else {
    return !matchInternal.test(url);
  }
});

/** @jsx jsx */
var Source = function Source(_ref) {
  var usabilla = _ref.usabilla,
      baseUrl = _ref.baseUrl,
      sourcesCollection = _ref.sourcesCollection,
      markdownText = _ref.markdownText,
      reviewedDate = _ref.reviewedDate,
      reviewedDateText = _ref.reviewedDateText,
      style = _ref.style,
      english = _ref.english,
      bottomContent = _ref.bottomContent,
      sourceText = _ref.sourceText;
  var reviewed = reviewedDate ? new Date(reviewedDate) : null;
  var monthsSv = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
  var monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return jsx("div", {
    css: [sourceStyle, style]
  }, usabilla && jsx("div", {
    className: "usabilla",
    css: usabilla ? firstRowUsabilla : firstRow
  }, usabilla), jsx("div", {
    css: secondRow
  }, sourcesCollection && sourcesCollection.items.length > 0 && jsx("p", null, sourceText ? "".concat(sourceText, " ") : 'Källa: ', sourcesCollection.items.map(function (item, idx) {
    return jsx("a", {
      href: item.linkUrl,
      key: "link-" + idx,
      css: sourceLink,
      className: isExternal(baseUrl, item.linkUrl) ? "external" : null
    }, item.linkText, isExternal(baseUrl, item.linkUrl) && jsx(External, {
      title: "Extern l\xE4nk",
      className: "external"
    }));
  })), markdownText, reviewed && jsx("div", {
    css: rightAlign
  }, jsx("p", null, "".concat(reviewedDateText || english ? 'Proofread: ' : 'Granskad: ').concat(reviewed.getDate(), " ").concat(english ? monthsEn[reviewed.getMonth()] : monthsSv[reviewed.getMonth()], " ").concat(reviewed.getFullYear())))), bottomContent && jsx("div", null, bottomContent));
};

var Polyfill = function Polyfill(nounce) {
  return "\n        var pf = [];\n        if(!Object.assign)pf.push(\"Object.assign\");\n        if(!window.Promise)pf.push(\"Promise\");\n        if(!window.fetch)pf.push(\"fetch\");\n        if(!window.IntersectionObserver)pf.push(\"IntersectionObserver\");\n        if(!window.IntersectionObserverEntry)pf.push(\"IntersectionObserverEntry\");\n        if(!window.URL || typeof window.URL !== \"function\")pf.push(\"URL\");\n        if(!Array.prototype.find)pf.push(\"Array.prototype.find\");\n        if(!Array.prototype.includes)pf.push(\"Array.prototype.includes\");\n        if(!Array.prototype.findIndex)pf.push(\"Array.prototype.findIndex\")\n        if(!Array.prototype.entries)pf.push(\"Array.prototype.entries\")\n        if(!window.HTMLPictureElement)pf.push(\"HTMLPictureElement\")\n        if(!String.prototype.endsWith)pf.push(\"String.prototype.endsWith\");\n        if(!String.prototype.startsWith)pf.push(\"String.prototype.startsWith\");\n        if(!Object.values)pf.push(\"Object.values\");\n        if(!Object.entries)pf.push(\"Object.entries\");\n        if(!Element.prototype.matches)pf.push(\"Element.prototype.matches\")\n        if(!Element.prototype.remove)pf.push(\"Element.prototype.remove\")\n        if(pf.length > 0) {\n            console.log(\"polyfill(s) found\",pf)\n            var js = document.createElement('script');\n            js.src = \"https://polyfill.io/v3/polyfill.min.js?features=\"+pf.join(\",\");\n            js.nounce = \"".concat(nounce, "\";\n            document.head.appendChild(js);\n        }\n    ");
};

function _templateObject$p() {
  var data = _taggedTemplateLiteral(["\n  height: ", "rem;\n  background-repeat: no-repeat;\n  background-image: \n    ", "\n    linear-gradient(", " 100%, transparent 0);\n    background-size:\n      ", "\n      100% 100%;\n    background-position:\n      ", "\n      0 0;\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}

var linearGradient = function linearGradient(rows) {
  return new Array(rows).fill(0).map(function () {
    return "linear-gradient(".concat(colors.theme3.xLight, " 100%, transparent 0),");
  });
};

var randomIntFromInterval = function randomIntFromInterval(min, max) {
  return Math.random() * (max - min + 1) + min;
};

var backgroundSize = function backgroundSize(rows) {
  return new Array(rows).fill(0).map(function () {
    return "".concat(randomIntFromInterval(80, 90), "% ").concat(spacing.m, ",");
  });
};

var backgroundPosition = function backgroundPosition(rows) {
  return new Array(rows).fill(0).map(function (a, i) {
    return "".concat(spacing.xs, " calc(").concat(spacing.xs, " * ").concat(i * 6, "),");
  });
};

var wrapper$6 = function wrapper(rows, height) {
  return css(_templateObject$p(), height, linearGradient(rows), colors.common.white, backgroundSize(rows), backgroundPosition(rows));
};

/** @jsx jsx */
var Skeleton = function Skeleton(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 8 : _ref$rows,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 48 : _ref$height;
  return jsx("div", {
    css: wrapper$6(rows, height)
  });
};

function _templateObject7$d() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n    background-color:", ";\n\n\n    color: #fff!important;\n\n\n\n\n\n    &:hover{\n\n\n        color: ", "!important;\n\n\n    }\n\n\n\n\n\n\n\n\n"]);

  _templateObject7$d = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$g() {
  var data = _taggedTemplateLiteral(["\n\n\n    font-size: 1.6rem;\n\n\n    color: ", ";\n\n\n    font-weight: 500;\n\n\n    ", "{\n\n\n        font-size: 2.1rem;\n\n\n    }\n\n\n\n\n\n"]);

  _templateObject6$g = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$i() {
  var data = _taggedTemplateLiteral(["\n\n\n    visibility: hidden;\n\n\n"]);

  _templateObject5$i = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$l() {
  var data = _taggedTemplateLiteral(["\n\n\n    margin-left: auto;\n\n\n    font-size: 1.8rem;\n\n\n    position: absolute;\n\n\n    right: 0px;\n\n\n    bottom: -0rem;\n\n\n\n\n\n    ", "{\n\n\n        position: static;\n\n\n    }\n\n\n    &:visited{\n\n\n        color: ", "!important;\n\n\n    }\n\n\n\n\n\n"]);

  _templateObject4$l = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$m() {
  var data = _taggedTemplateLiteral(["\n\n\n    margin-right: auto;\n\n\n    font-size: 1.8rem;\n\n\n    position: absolute;\n\n\n    left: 0px;\n\n\n    bottom: -0rem;\n\n\n\n\n\n    ", "{\n\n\n        position: static;\n\n\n    }\n\n\n    &:visited{\n\n\n        color: ", "!important;\n\n\n    }\n\n\n"]);

  _templateObject3$m = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$n() {
  var data = _taggedTemplateLiteral(["\n\n\n    height: 4.0rem;\n\n\n    width: 4.2rem;\n\n\n\n\n\n    line-height: 4.0rem;\n\n\n    border: 1px solid ", ";\n\n\n    border-radius: 8px;\n\n\n    display: inline-block;\n\n\n    font-size: 2.1rem;\n\n\n    text-align:center;\n\n\n    text-decoration: none !important;\n\n\n    margin: 0 0.8rem;\n\n\n\n\n\n    &.last{\n\n\n        margin-right: 0;\n\n\n    }\n\n\n\n\n\n    &.first{\n\n\n        margin-left: 0;\n\n\n    }\n\n\n\n\n\n    ", "{\n\n\n        margin: 0 1.2rem;\n\n\n        height: 5.6rem;\n\n\n        line-height: 5.6rem;\n\n\n        width: 6.0rem;\n\n\n    }\n\n\n\n\n\n"]);

  _templateObject2$n = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$q() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n    display: flex;\n\n\n    justify-content: center;\n\n\n    align-items: center;\n\n\n    position: relative;\n\n\n    padding-bottom: 5.6rem;\n\n\n\n\n\n    ", "{\n\n\n        justify-content: space-between;\n\n\n        padding-bottom: 4.8rem;\n\n\n    }\n\n\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var paginationWrapperStyle = css(_templateObject$q(), large);
var pageStyle = css(_templateObject2$n(), colors.theme1.mid, medium);
var prevPageStyle = css(_templateObject3$m(), medium, colors.theme1.mid);
var nextPageStyle = css(_templateObject4$l(), medium, colors.theme1.mid);
var prevPageStyleHidden = css(_templateObject5$i());
var distanceIndicatorStyle = css(_templateObject6$g(), colors.theme1.mid, medium);
var currentPageStyle = css(_templateObject7$d(), colors.theme1.dark, colors.theme1.mid);

var Pagination = function Pagination(_ref) {
  var pageSize = _ref.pageSize,
      total = _ref.total,
      currentPage = _ref.currentPage,
      baseUrl = _ref.baseUrl,
      _onClick = _ref.onClick,
      style = _ref.style,
      seoCallback = _ref.seoCallback;
  if (total == 0) return null;

  if (!_onClick) {
    _onClick = function onClick() {};
  }

  var totalNumberOfPages = Math.ceil(total / pageSize);
  var links = Object.keys(_toConsumableArray(new Array(totalNumberOfPages))).map(function (val) {
    return parseInt(val) + 1;
  });
  var searchRadius = currentPage == totalNumberOfPages || currentPage == 1 ? 2 : 1;

  var createHref = function createHref(pageNumber) {
    var url = new URL(baseUrl, "http://f.a");
    url.searchParams.set("page", pageNumber);
    return url.pathname + url.search;
  }; //filter pages that are close to the current page


  var shouldBeDisplayed = function shouldBeDisplayed(page) {
    if (page == currentPage) return true;
    if (page > currentPage && currentPage + searchRadius >= page) return true;
    if (page < currentPage && currentPage - searchRadius <= page) return true;
    return false;
  };

  var filteredLink = links.filter(function (x) {
    return shouldBeDisplayed(x);
  });

  var firstLink = function firstLink() {
    if (filteredLink.some(function (x) {
      return x === 1;
    })) return null;
    var distanceEl = filteredLink.some(function (x) {
      return x === 2;
    }) ? null : jsx("span", {
      css: distanceIndicatorStyle
    }, "...");
    return jsx(React.Fragment, null, jsx("a", {
      className: "first",
      href: createHref(1),
      onClick: function onClick(e) {
        return _onClick(e, 1);
      },
      css: [pageStyle]
    }, "1"), distanceEl);
  };

  var lastLink = function lastLink() {
    var max = Math.max.apply(Math, _toConsumableArray(links));
    if (filteredLink.some(function (x) {
      return x == max;
    })) return null;
    var distanceEl = filteredLink.some(function (x) {
      return x === max - 1;
    }) ? null : jsx("span", {
      css: distanceIndicatorStyle
    }, "...");
    return jsx(React.Fragment, null, distanceEl, jsx("a", {
      className: "last",
      href: createHref(max),
      onClick: function onClick(e) {
        return _onClick(e, max);
      },
      css: pageStyle
    }, max));
  };

  var isFirstPage = currentPage == 1;
  var lastPage = Math.max.apply(Math, _toConsumableArray(links));
  var isLastPage = lastPage == currentPage;
  var prevPage = isFirstPage ? null : createHref(currentPage - 1);
  var nextPage = isLastPage ? null : createHref(currentPage + 1);
  var SeoCallbackResult = seoCallback ? seoCallback(prevPage, nextPage) : null;

  var getClass = function getClass(pageNumber) {
    if (lastPage === pageNumber) return "last";
    if (pageNumber === 1) return "first";
    return null;
  };

  return jsx("nav", {
    "aria-label": "pagination",
    css: [paginationWrapperStyle, style]
  }, isFirstPage ? jsx("span", {
    css: [prevPageStyle, prevPageStyleHidden]
  }, "F\xF6reg\xE5ende sida") : jsx("a", {
    href: createHref(currentPage - 1),
    onClick: function onClick(e) {
      return _onClick(e, currentPage - 1);
    },
    css: prevPageStyle
  }, "F\xF6reg\xE5ende sida"), firstLink(), filteredLink.map(function (pageNumber) {
    var isCurrent = pageNumber == currentPage;
    return jsx("a", {
      href: createHref(pageNumber),
      className: getClass(pageNumber),
      onClick: function onClick(e) {
        return _onClick(e, pageNumber);
      },
      "aria-current": isCurrent ? "page" : null,
      key: "pagination".concat(pageNumber),
      css: [pageStyle, isCurrent ? currentPageStyle : null]
    }, pageNumber);
  }), lastLink(), isLastPage ? jsx("span", {
    css: [nextPageStyle, prevPageStyleHidden]
  }, "N\xE4sta sida") : jsx("a", {
    href: createHref(currentPage + 1),
    onClick: function onClick(e) {
      return _onClick(e, currentPage + 1);
    },
    css: nextPageStyle
  }, "N\xE4sta sida"), SeoCallbackResult);
};

function _templateObject8$c() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ", ";\n  }\n  &:hover {\n    text-decoration: underline !important;\n  }\n"]);

  _templateObject8$c = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$e() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  position: relative;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 0.8rem 4rem 0.8rem 1.6rem;\n  border: solid 1px ", ";\n  color: ", ";\n  border-radius: 3.2rem;\n  transition: visibility 0.1s, opacity 0.1s ease-in-out;\n  font-weight: 700;\n  margin-bottom: 1.6rem;\n  margin-left:auto;\n  align-self: center;\n\n  cursor: pointer;\n\n  .expanded > & {\n    visibility: visible;\n    display:block;\n    opacity: 1;\n  }\n\n  &:hover {\n    text-decoration: underline;\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:active {\n    text-decoration: underline;\n    color: #fff;\n    background-color: ", ";\n    border-color: ", ";\n    svg {\n      fill: #fff;\n    }\n  }\n\n  > svg {\n    transform: rotate(180deg);\n    height: 1.6rem;\n    fill: ", ";\n    height: 1.6rem;\n    position: absolute;\n    width: 1.6rem;\n    top: 1.2rem;\n    right: 1.6rem;\n  }\n"]);

  _templateObject7$e = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$h() {
  var data = _taggedTemplateLiteral(["\n    margin-left:auto!important;\n"]);

  _templateObject6$h = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$j() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(180deg);\n"]);

  _templateObject5$j = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$m() {
  var data = _taggedTemplateLiteral(["\n    transition: transform .2s ease-out;\n    width: ", ";\n    height: ", ";\n    margin-left: .5rem;\n    display:flex;\n    ", " {\n        margin-left: 1rem;\n    }\n"]);

  _templateObject4$m = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$n() {
  var data = _taggedTemplateLiteral(["\n\n  &.full-width > .link-element a {\n    display: block;\n  }\n\n  > .link-element a {\n\n    .link-element-container {\n\n        h1, h2, h3, h4 {\n            white-space: pre-line;\n            margin-bottom: 0;\n        }\n\n        display: flex;\n        align-items: center;\n\n    }\n\n    font-weight: 600;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    position: relative;\n    ", " {\n      width: 100%;\n    }\n\n    svg {\n      font-size: inherit;\n      vertical-align: middle;\n      fill: ", ";\n      flex-shrink: 0;\n    }\n  }\n\n  .expand-section {\n    max-height: 0;\n    overflow: hidden;\n    height: auto;\n    transition: all 0.3s ease-in-out;\n    display: flex;\n    flex-direction: column;\n\n    &.expanded {\n      max-height: 100%;\n      overflow: visible;\n      -ms-overflow-style: none;\n      overflow: -moz-scrollbars-none;\n      &::-webkit-scrollbar{\n        display:none;\n      }\n    }\n    &:not(.expanded) {\n      visibility: hidden;\n      display: none;\n\n    }\n  }\n"]);

  _templateObject3$n = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$o() {
  var data = _taggedTemplateLiteral(["\n\n  > .expanded > .link-element {\n    background-color: ", ";\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    &:hover {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  > div > .link-element {\n    border-radius: ", ";\n    background-color: ", ";\n    margin-bottom: 0rem!important;\n    border: 2px solid transparent;\n    &:hover {\n      border: .2rem solid ", ";\n      border-radius: ", ";\n      background-color: ", ";\n    }\n    a{\n        margin: 0 1px 1px 1px;\n        padding: ", " ", ";\n        ", " {\n          padding: ", " ", ";\n        }\n        box-sizing: border-box;\n        &:hover {\n            text-decoration: underline;\n            cursor: pointer;\n        }\n        &[aria-expanded=\"true\"] {\n            h2,h3,h4{\n                text-decoration: underline!important;\n            }\n        }\n    }\n  }\n  > div > .expand-section {\n      background-color: ", ";\n      border: 2px solid transparent;\n      padding: ", " ", " ", " ", ";\n      ", " {\n        padding: ", " ", " ", " ", ";\n      }\n      position: fixed;\n  }\n  > div > .expand-section.expanded {\n    border: 2px solid ", ";\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    border-top: none;\n    position: relative;\n    > div {\n      margin-top: 0;\n    }\n  }\n\n"]);

  _templateObject2$o = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$r() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 0.5rem;\n\n    :focus-within {\n      .tabnav &{\n          outline: .2rem solid ", ";\n          outline-offset: .2rem;\n      }\n    }\n\n    > .withContentExpander {\n      .full-width {\n          border: 2px solid transparent;\n          &.expanded,:hover{\n              border: .2rem solid ", ";\n          }\n      }\n\n      > .link-element { \n          margin-bottom: 0rem!important;\n          a{\n              padding: 2.4rem;\n              box-sizing: border-box;\n              &:hover {\n                  text-decoration: underline;\n                  background-color: inherit;\n                  cursor: pointer;\n              }\n              &[aria-expanded=\"true\"] {\n                  h2,h3,h4{\n                      text-decoration: underline!important;\n                  }\n              }\n          }\n      }\n      > .expand-section{\n          padding: 0 2.4rem;\n      }\n    }\n\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var grayContentExpanderWrapper = css(_templateObject$r(), colors.theme3.xLight, colors.states.focus, colors.theme1.mid);
var grayFocusedOnExpansionWrapper = css(_templateObject2$o(), colors.theme3.light, spacing.xs, colors.theme3.xLight, colors.theme1.mid, spacing.xs, colors.theme1.light, spacing.s, spacing.xs, medium, spacing.s, spacing.m, colors.common.white, spacing.s, spacing.xs, spacing.m, spacing.xs, medium, spacing.s, spacing.m, spacing.m, spacing.m, colors.theme3.light, spacing.xs, spacing.xs);
var ComponentWrapperStyle = css(_templateObject3$n(), small, colors.theme1.mid);
var IconStyle = function IconStyle(fontSize) {
  return css(_templateObject4$m(), fontSize, fontSize, medium);
};
var IconExpandedStyle = css(_templateObject5$j());
var IconFullWidth = css(_templateObject6$h());
var collapseButtonStyle = css(_templateObject7$e(), spacing.xs, colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.mid);
var baseLinkStyle = css(_templateObject8$c(), colors.theme1.mid, colors.theme1.mid);

var measureElement = function measureElement(element) {
  var DOMNode = ReactDOM.findDOMNode(element);
  return DOMNode && DOMNode.childNodes[0] && window.getComputedStyle(DOMNode.querySelectorAll("h1, h2, h3, h4, h5, h6")[0] || DOMNode.childNodes[0], null).getPropertyValue("line-height");
};

var WithContentExpander = function WithContentExpander(_ref) {
  var wrappedComponent = _ref.wrappedComponent,
      linkElement = _ref.linkElement,
      linkStyle = _ref.linkStyle,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? true : _ref$isFullWidth,
      _ref$hasCollapseButto = _ref.hasCollapseButton,
      hasCollapseButton = _ref$hasCollapseButto === void 0 ? false : _ref$hasCollapseButto,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$scrollIntoView = _ref.scrollIntoView,
      scrollIntoView = _ref$scrollIntoView === void 0 ? false : _ref$scrollIntoView,
      wrapperStyle = _ref.wrapperStyle,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      wrapperId = _ref.wrapperId,
      _ref$linkHref = _ref.linkHref,
      linkHref = _ref$linkHref === void 0 ? "" : _ref$linkHref;

  var _useState = useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = useState("16px"),
      _useState4 = _slicedToArray(_useState3, 2),
      linkElementFontSize = _useState4[0],
      setLinkElementFontSize = _useState4[1];

  var linkContainerRef = useRef();
  var linkRef = useRef();
  var topOfComponent = useRef();

  var doExpansion = function doExpansion(e) {
    setExpanded(!expanded);

    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    return false;
  };

  useEffect(function () {
    setExpanded(open);
  }, [open]);
  useEffect(function () {
    setLinkElementFontSize(measureElement(linkContainerRef.current));
  }, []);
  useLayoutEffect(function () {
    if (scrollIntoView && topOfComponent.current && expanded) {
      var DOMNode = ReactDOM.findDOMNode(topOfComponent.current);
      DOMNode.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [expanded]);
  if (!show) return null;
  return jsx("div", {
    className: "withContentExpander ".concat(isFullWidth ? "full-width" : null, " ").concat(expanded ? "expanded" : null),
    id: wrapperId,
    css: [ComponentWrapperStyle, wrapperStyle],
    ref: topOfComponent
  }, jsx("div", {
    className: "link-element",
    onClick: function onClick(e) {
      return doExpansion(e);
    }
  }, jsx("a", {
    href: linkHref,
    ref: linkRef,
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    "aria-haspopup": "true",
    "aria-expanded": expanded ? "true" : "false",
    "aria-label": linkElement.props.children || "",
    className: "noStyle accordion",
    css: [baseLinkStyle, linkStyle]
  }, jsx("div", {
    className: "link-element-container",
    ref: linkContainerRef
  }, linkElement, jsx(Arrow, {
    "aria-hidden": "true",
    className: "expand-icon",
    style: [IconStyle(linkElementFontSize), expanded ? IconExpandedStyle : null, isFullWidth ? IconFullWidth : null]
  })))), jsx("div", {
    className: "expand-section ".concat(expanded && "expanded")
  }, wrappedComponent, hasCollapseButton && jsx("div", {
    tabIndex: "0",
    onClick: function onClick(e) {
      var DOMNode = ReactDOM.findDOMNode(linkRef.current);
      DOMNode.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      doExpansion(e);
      DOMNode.focus({
        preventScroll: true
      });
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        var DOMNode = ReactDOM.findDOMNode(linkRef.current);
        DOMNode.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        doExpansion(e);
        DOMNode.focus({
          preventScroll: true
        });
      }
    },
    css: collapseButtonStyle
  }, "F\xE4ll ihop ", jsx(Arrow, null))));
};

export { Button, CampaignFocusPuff, DateFormat, DisplayAlphabet, Dropdown, EditorIcon, ElementLinkColorStyle, ElementLinkInvertedColorStyle, ExpandButton, FactBox, FocusPuff, FormCheckbox, FormRadiobutton, FormSearchField, Formats, GlobalStyles, Heading, Icon, IconCard, InputRadio, InputText, LinkCard, LinkTextCard, LinkWrapperColorStyle, LinkWrapperInvertedColorStyle, ListItem, ListItemDisabled, Pagination, Polyfill, PrerequisitesBox, Skeleton, Source, SubHeading, Tag, TagBlock, TextArea, ValidationResponse, WithContentExpander, checkPath, colors, grayContentExpanderWrapper, grayFocusedOnExpansionWrapper, spacing };
//# sourceMappingURL=main.es.js.map
