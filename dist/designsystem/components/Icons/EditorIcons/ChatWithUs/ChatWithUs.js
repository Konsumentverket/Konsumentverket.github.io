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
    width: "32px",
    height: "25px",
    viewBox: "0 0 32 25"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M12.4444383,18.2397892 C10.355606,18.2397892 8.38738475,17.8623896 6.65871893,17.1962623 C4.91566424,18.5661843 2.77710974,19.40095 0.505166417,19.6402357 C0.488740902,19.6419646 0.472237437,19.6428585 0.455721997,19.6428585 C0.248166544,19.6428585 0.0606666367,19.5034611 0.0103333282,19.304633 C-0.0441110893,19.083595 0.126333271,18.9475459 0.295110965,18.7853807 C1.12938833,17.9796329 2.14077672,17.3462065 2.53633208,14.6393425 C0.945277311,13.1074786 0,11.1954249 0,9.11992249 C0,4.08258956 5.5720528,0 12.4444383,0 C19.3168238,0 24.8888766,4.08253376 24.8888766,9.11992249 C24.8888766,14.160771 19.3168238,18.2397892 12.4444383,18.2397892 Z M31.7259288,24.2204815 C30.9512625,23.487948 30.0120963,22.9121109 29.6448187,20.4513407 C33.4674835,16.8482154 32.5432062,11.6938066 27.5518197,8.89637337 C27.5535419,8.97081534 27.5554864,9.0452015 27.5554864,9.11992249 C27.5554864,15.9554698 20.3564344,21.1954813 11.7637164,20.9068653 C13.8815487,22.6345997 16.9853249,23.7244994 20.4443788,23.7244994 C22.3840445,23.7244994 24.2116547,23.381419 25.8168206,22.7758386 C27.4353753,24.021207 29.4211521,24.7800798 31.5308733,24.9976021 C31.7412065,25.0196445 31.9399287,24.8875017 31.9903175,24.692524 C32.0409286,24.4915753 31.8826509,24.3679146 31.7259288,24.2204815 L31.7259288,24.2204815 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=ChatWithUs.js.map