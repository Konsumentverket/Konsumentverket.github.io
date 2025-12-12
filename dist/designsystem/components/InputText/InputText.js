"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputText = void 0;

var _core = require("@emotion/core");

var _InputText = require("./InputText.css");

var _react = _interopRequireWildcard(require("react"));

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Loading = _interopRequireDefault(require("../Loading/Loading"));

var _Clear = _interopRequireDefault(require("../Icons/SystemIcons/Clear/Clear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputText = _react["default"].forwardRef(function (_ref, _ref2) {
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

  var inputRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var invalid = validationError ? _InputText.invalidStyle : null;
  var innerContent = null;

  if (type == "search" && !loading && text != null && text != "") {
    innerContent = (0, _core.jsx)("a", {
      href: "#",
      css: _InputText.ClearInput,
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
    }, (0, _core.jsx)(_Clear["default"], null));
  }

  if (loading) {
    innerContent = (0, _core.jsx)(_Loading["default"], {
      style: _InputText.LoadingStyle
    });
  }

  return (0, _core.jsx)("div", {
    css: [_InputText.InputWrapperStyle, wrapperStyle, invalid]
  }, label && (0, _core.jsx)("label", {
    css: [_InputText.Label, hideLabel ? _globalStyles.VisuallyHidden : null],
    htmlFor: id
  }, label), validationError, (0, _core.jsx)("input", _extends({
    ref: function ref(el) {
      inputRef.current = el;
      return typeof _ref2 === 'function' ? _ref2(el) : null;
    },
    css: [(0, _InputText.InputStyle)(innerContent != null), style],
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

exports.InputText = InputText;

//# sourceMappingURL=InputText.js.map