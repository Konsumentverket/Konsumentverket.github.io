"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkTextCard = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _LinkCard = require("../LinkCard/LinkCard.css");

var _SubHeading = require("../SubHeading/SubHeading");

var _Arrow = _interopRequireDefault(require("../Icons/SystemIcons/Arrow/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LinkTextCard = _react["default"].forwardRef(function (_ref, ref) {
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
      return (0, _core.jsx)(_SubHeading.SubHeading, {
        level: headingLevel,
        styleLevel: 3,
        style: _LinkCard.innerTextWrapperStyle
      }, (0, _core.jsx)("span", null, text), (0, _core.jsx)(_Arrow["default"], {
        "aria-hidden": "true"
      }));
    } else {
      return (0, _core.jsx)("div", {
        css: _LinkCard.innerTextWrapperStyle
      }, (0, _core.jsx)("span", null, text), (0, _core.jsx)(_Arrow["default"], {
        "aria-hidden": "true"
      }));
    }
  };

  return (0, _core.jsx)("div", _extends({
    id: id,
    dir: dir,
    css: [_LinkCard.wrapper, _LinkCard.linkTextWrapper, style],
    lang: lang
  }, other), (0, _core.jsx)("a", {
    ref: ref,
    href: href,
    css: [_LinkCard.mainLinkStyle, _LinkCard.linkTextMainLinkStyle],
    onClick: onClick
  }, renderLinkText(), children && (0, _core.jsx)("span", {
    css: _LinkCard.linkTextCardContentStyle
  }, children)));
});

exports.LinkTextCard = LinkTextCard;
LinkTextCard.displayName = "LinkTextCard";

//# sourceMappingURL=LinkTextCard.js.map