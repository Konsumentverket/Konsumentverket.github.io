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
    d: "M17.8215947,20.3378738 C19.0186047,19.3700997 19.954485,18.1920266 20.6272425,16.8066445 C21.3,15.4192691 21.6368771,13.9302326 21.6368771,12.3375415 C21.6368771,10.7458472 21.3,9.25681063 20.6272425,7.87043189 C19.954485,6.48504983 19.0186047,5.30598007 17.8215947,4.33820598 L19.4950166,2.66478405 C20.9063123,3.8627907 22.0096346,5.29800664 22.8059801,6.97242525 C23.6023256,8.64584718 24,10.4348837 24,12.3375415 C24,14.241196 23.6023256,16.0302326 22.8059801,17.7046512 C22.0096346,19.3790698 20.9063123,20.8152824 19.4950166,22.0122924 L17.8215947,20.3378738 Z M14.6700997,17.1873754 C15.4415282,16.6302326 16.0574751,15.9275748 16.5159468,15.0833887 C16.9754153,14.238206 17.2066445,13.3232558 17.2066445,12.3375415 C17.2066445,11.3528239 16.9754153,10.4388704 16.5159468,9.59368771 C16.0574751,8.74950166 15.4415282,8.04684385 14.6700997,7.48870432 L16.3445183,5.81528239 C17.3451827,6.56976744 18.1325581,7.52159468 18.7076412,8.67076412 C19.2817276,9.81993355 19.5687708,11.0418605 19.5687708,12.3375415 C19.5687708,13.6342193 19.2817276,14.8571429 18.7076412,16.0063123 C18.1325581,17.1554817 17.3451827,18.107309 16.3445183,18.861794 L14.6700997,17.1873754 Z M5.16877076,16.7687708 L1.47707641,16.7687708 C1.06644518,16.7687708 0.716611296,16.6252492 0.431561462,16.338206 C0.143521595,16.0521595 0,15.7023256 0,15.292691 L0,9.38438538 C0,8.97475083 0.143521595,8.62491694 0.431561462,8.33787375 C0.716611296,8.05182724 1.06644518,7.90730897 1.47707641,7.90730897 L5.16877076,7.90730897 L11.0033223,2 L13.2916944,2 L13.2916944,22.6770764 L11.0033223,22.6770764 L5.16877076,16.7687708 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Volume.js.map