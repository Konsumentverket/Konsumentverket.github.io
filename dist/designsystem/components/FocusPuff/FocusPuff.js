"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusPuff = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var css = _interopRequireWildcard(require("./FocusPuff.css"));

var _External = _interopRequireDefault(require("../Icons/SystemIcons/External/External"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var FocusPuff = _react["default"].forwardRef(function (_ref, ref) {
  var headline = _ref.headline,
      text = _ref.text,
      url = _ref.url,
      isExternalLink = _ref.isExternalLink,
      image = _ref.image,
      imageAlt = _ref.imageAlt,
      icon = _ref.icon,
      imageComponent = _ref.imageComponent,
      onClick = _ref.onClick,
      style = _ref.style;
  var imageArea = imageComponent;

  if (!imageArea) {
    if (image) {
      imageArea = (0, _core.jsx)("img", {
        src: image,
        alt: imageAlt
      });
    } else {
      if (icon) {
        imageArea = _react["default"].isValidElement(icon) ? _react["default"].cloneElement(icon, {
          style: css.puffIcon
        }) : null;
      }
    }
  }

  return (0, _core.jsx)("a", {
    css: [css.linkWrapper, style],
    onClick: onClick,
    href: url,
    className: "noStyle"
  }, (0, _core.jsx)("div", {
    css: [css.focusWrapper],
    className: 'focusWrapper'
  }, (0, _core.jsx)("div", {
    css: css.pictureWrapper,
    className: imageComponent ? 'image' : null
  }, imageArea), (0, _core.jsx)("div", {
    css: css.textArea,
    className: "textArea"
  }, (0, _core.jsx)("h3", {
    css: css.focusHeadline,
    className: "headline"
  }, headline, isExternalLink && (0, _core.jsx)(_External["default"], {
    title: "Extern l\xE4nk",
    style: css.externalIcon
  })), (0, _core.jsx)("p", {
    css: css.focusText,
    className: "text"
  }, text))));
});

exports.FocusPuff = FocusPuff;
FocusPuff.displayName = "FocusPuff";

//# sourceMappingURL=FocusPuff.js.map