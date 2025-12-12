"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSearchField = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _FormSearchField = require("./FormSearchField.css");

var _Button = require("../Button/Button");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Clear = _interopRequireDefault(require("../Icons/SystemIcons/Clear/Clear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormSearchField = _react["default"].forwardRef(function (_ref, _ref2) {
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

  var styles = [_FormSearchField.searchWrapperStyle];
  style && styles.push(style);
  var searchFieldInputStyles = [_FormSearchField.searchFieldInputStyle];
  invertedBackgroundColor && searchFieldInputStyles.push(_FormSearchField.invertedBackgroundStyle);
  var inputRef = (0, _react.useRef)();
  var ariaAttrs = {};
  Object.keys(other).filter(function (x) {
    return x.startsWith("aria-");
  }).forEach(function (x) {
    return ariaAttrs[x] = other[x];
  });
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)("label", {
    css: showLabel ? _FormSearchField.labelStyle : _globalStyles.VisuallyHidden,
    htmlFor: id || name
  }, labeltext || fieldtext), validationError, (0, _core.jsx)("div", {
    css: [styles],
    className: className,
    role: "search"
  }, (0, _core.jsx)("div", {
    css: _FormSearchField.searchFieldInputWrapperStyles
  }, (0, _core.jsx)("input", _extends({}, other, {
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
  })), inputRef && inputRef.current && inputRef.current.value.length > 0 && (0, _core.jsx)("a", {
    href: "#",
    css: _FormSearchField.clearInputStyle,
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
  }, (0, _core.jsx)(_Clear["default"], null))), (0, _core.jsx)(_Button.Button, {
    style: _FormSearchField.searchFieldButtonStyle,
    disabled: disabled,
    onClick: onClick,
    iconLeft: icon,
    text: buttontext //{...ariaAttrs}

  })));
});

exports.FormSearchField = FormSearchField;

//# sourceMappingURL=FormSearchField.js.map