"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  var styles = [_Button.buttonStyle];
  var cssClass = [className];
  secondaryButtonStyle && styles.push(_Button.secondaryStyle);
  invertedBackgroundColor && styles.push(_Button.invertedBackgroundStyle);
  selected && cssClass.push("selectedButtonStyle");
  href && cssClass.push("noStyle");
  invertedBackgroundColor && secondaryButtonStyle && styles.push(_Button.invertedSecondaryBackgroundStyle);
  iconLeft && styles.push(_Button.buttonIconLeft);
  iconRight && styles.push(_Button.buttonIconRight);
  var ariaAttrs = {};
  Object.keys(other).filter(function (x) {
    return x.startsWith("aria-");
  }).forEach(function (x) {
    return ariaAttrs[x] = other[x];
  });
  style && styles.push(style);

  var props = _objectSpread({
    "id": id,
    "css": styles,
    "className": cssClass.join(" "),
    "disabled": disabled,
    "onClick": onClick,
    "ref": reference,
    "type": href !== null ? null : type,
    "href": href || null
  }, ariaAttrs);

  return href ? (0, _core.jsx)("a", props, iconLeft, text, iconRight) : (0, _core.jsx)("button", props, iconLeft, text, iconRight);
};

exports.Button = Button;

//# sourceMappingURL=Button.js.map