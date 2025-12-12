"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.checkPath = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var checkPath = "M6.09703073,13.0077039 L0.262878687,7.22504644 C-0.0876262289,6.87763523 -0.0876262289,6.3143474 0.262878687,5.96690144 L1.53219243,4.70875643 C1.88269734,4.36131046 2.45103631,4.36131046 2.80154123,4.70875643 L6.73170513,8.60419634 L15.1496783,0.260558412 C15.5001832,-0.0868528038 16.0685222,-0.0868528038 16.4190271,0.260558412 L17.6883408,1.51870342 C18.0388457,1.86611463 18.0388457,2.42940246 17.6883408,2.77684843 L7.36637953,13.0077386 C7.01583955,13.3551498 6.44753564,13.3551498 6.09703073,13.0077039 L6.09703073,13.0077039 Z";
exports.checkPath = checkPath;

var _default = function _default(_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return (0, _core.jsx)("svg", _extends({
    "aria-hidden": "true",
    className: className,
    css: style,
    width: "18px",
    height: "14px",
    viewBox: "0 0 18 14"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: checkPath
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Check.js.map