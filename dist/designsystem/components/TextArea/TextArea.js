"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _core = require("@emotion/core");

var _TextArea = require("./TextArea.css");

var _react = require("react");

var _globalStyles = require("../GlobalStyles/globalStyles");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  var inputRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      addedText = _useState2[0],
      setText = _useState2[1];

  var invalid = validationError ? _TextArea.invalidStyle : null;
  return (0, _core.jsx)("div", {
    css: [_TextArea.TextAreaWrapperStyle, wrapperStyle, invalid]
  }, label && (0, _core.jsx)("label", {
    css: [_TextArea.Label, hiddenLabel ? _globalStyles.VisuallyHidden : null],
    htmlFor: id || name
  }, label), validationError, (0, _core.jsx)("textarea", _extends({
    rows: "2",
    id: id,
    ref: inputRef
  }, other, {
    css: [_TextArea.TextAreaStyle, style],
    name: name,
    disabled: disabled,
    placeholder: placeholder,
    onChange: function onChange(e) {
      _onChange(e);

      setText(e.target.value);
    }
  }), addedText));
};

exports.TextArea = TextArea;

//# sourceMappingURL=TextArea.js.map