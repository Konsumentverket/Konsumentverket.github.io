"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithContentExpander = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _WithContentExpander = require("./WithContentExpander.css");

var _Arrow = _interopRequireDefault(require("../Icons/SystemIcons/Arrow/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var measureElement = function measureElement(element) {
  var DOMNode = _reactDom["default"].findDOMNode(element);

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
      linkHref = _ref$linkHref === void 0 ? "" : _ref$linkHref,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;

  var _useState = (0, _react.useState)(open),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)("16px"),
      _useState4 = _slicedToArray(_useState3, 2),
      linkElementFontSize = _useState4[0],
      setLinkElementFontSize = _useState4[1];

  var linkContainerRef = (0, _react.useRef)();
  var linkRef = (0, _react.useRef)();
  var topOfComponent = (0, _react.useRef)();

  var doExpansion = function doExpansion(e) {
    if (disabled) {
      return false;
    }

    setExpanded(!expanded);

    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    return false;
  };

  (0, _react.useEffect)(function () {
    setExpanded(open);
  }, [open]);
  (0, _react.useEffect)(function () {
    setLinkElementFontSize(measureElement(linkContainerRef.current));
  }, []);
  (0, _react.useEffect)(function () {
    if (scrollIntoView && topOfComponent.current && expanded) {
      var DOMNode = _reactDom["default"].findDOMNode(topOfComponent.current);

      DOMNode.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [expanded]);
  if (!show) return null;
  return (0, _core.jsx)("div", {
    className: "withContentExpander ".concat(isFullWidth ? "full-width" : null, " ").concat(expanded ? "expanded" : null),
    id: wrapperId,
    css: [_WithContentExpander.ComponentWrapperStyle, wrapperStyle],
    ref: topOfComponent
  }, (0, _core.jsx)("div", {
    className: "link-element",
    onClick: function onClick(e) {
      return doExpansion(e);
    }
  }, (0, _core.jsx)("a", {
    href: linkHref,
    ref: linkRef,
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    "aria-haspopup": "true",
    "aria-expanded": expanded ? "true" : "false",
    "aria-label": linkElement.props.children || "",
    className: "noStyle accordion",
    css: [_WithContentExpander.baseLinkStyle, linkStyle]
  }, (0, _core.jsx)("div", {
    className: "link-element-container",
    ref: linkContainerRef
  }, linkElement, !disabled && (0, _core.jsx)(_Arrow["default"], {
    "aria-hidden": "true",
    className: "expand-icon",
    style: [(0, _WithContentExpander.IconStyle)(linkElementFontSize), expanded ? _WithContentExpander.IconExpandedStyle : null, isFullWidth ? _WithContentExpander.IconFullWidth : null]
  })))), (0, _core.jsx)("div", {
    className: "expand-section ".concat(expanded && "expanded", " ").concat(disabled && "expanded")
  }, wrappedComponent, hasCollapseButton && !disabled && (0, _core.jsx)("div", {
    tabIndex: "0",
    onClick: function onClick(e) {
      var DOMNode = _reactDom["default"].findDOMNode(linkRef.current);

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
        var DOMNode = _reactDom["default"].findDOMNode(linkRef.current);

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
    css: _WithContentExpander.collapseButtonStyle
  }, "F\xE4ll ihop ", (0, _core.jsx)(_Arrow["default"], null))));
};

exports.WithContentExpander = WithContentExpander;

//# sourceMappingURL=WithContentExpander.js.map