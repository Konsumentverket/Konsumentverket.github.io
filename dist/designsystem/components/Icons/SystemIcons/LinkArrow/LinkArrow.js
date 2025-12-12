"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return (0, _core.jsx)("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M10.8028122,5.07167392 L11.5955809,4.25830089 C11.9312577,3.9138997 12.4740542,3.9138997 12.80616,4.25830089 L19.7482424,11.3771468 C20.0839192,11.721548 20.0839192,12.278452 19.7482424,12.6191894 L12.80616,19.7416991 C12.4704832,20.0861003 11.9276866,20.0861003 11.5955809,19.7416991 L10.8028122,18.9283261 C10.4635643,18.580261 10.4707064,18.0123655 10.8170963,17.6716281 L15.1201875,13.465537 L4.8570472,13.465537 C4.38210021,13.465537 4,13.0735058 4,12.5862148 L4,11.4137852 C4,10.9264942 4.38210021,10.534463 4.8570472,10.534463 L15.1201875,10.534463 L10.8170963,6.32837188 C10.4671354,5.98763453 10.4599933,5.41973895 10.8028122,5.07167392 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=LinkArrow.js.map