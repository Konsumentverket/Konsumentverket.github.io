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
    height: "32px",
    viewBox: "0 0 32 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-584.000000, -1831.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(584.000000, 1831.000000)"
  }, (0, _core.jsx)("path", {
    d: "M21.7140553,9.80645161 C20.7783827,4.04516129 18.5714862,0 16.0032265,0 C13.4349667,0 11.2280702,4.04516129 10.2923977,9.80645161 L21.7140553,9.80645161 Z M9.80842912,16 C9.80842912,17.4322581 9.88586409,18.8064516 10.0213753,20.1290323 L21.9786247,20.1290323 C22.1141359,18.8064516 22.1915709,17.4322581 22.1915709,16 C22.1915709,14.5677419 22.1141359,13.1935484 21.9786247,11.8709677 L10.0213753,11.8709677 C9.88586409,13.1935484 9.80842912,14.5677419 9.80842912,16 Z M30.7610405,9.80645161 C28.9155072,5.42580645 25.17927,2.03870968 20.5654366,0.670967742 C22.1399476,2.8516129 23.2240371,6.13548387 23.7918935,9.80645161 L30.7610405,9.80645161 Z M11.4345634,0.670967742 C6.8271829,2.03870968 3.08449284,5.42580645 1.24541238,9.80645161 L8.21455939,9.80645161 C8.7759629,6.13548387 9.86005243,2.8516129 11.4345634,0.670967742 Z M31.4515023,11.8709677 L24.0500101,11.8709677 C24.1855213,13.2258065 24.2629562,14.6129032 24.2629562,16 C24.2629562,17.3870968 24.1855213,18.7741935 24.0500101,20.1290323 L31.4450494,20.1290323 C31.7999597,18.8064516 32,17.4322581 32,16 C32,14.5677419 31.7999597,13.1935484 31.4515023,11.8709677 Z M7.74349667,16 C7.74349667,14.6129032 7.82093164,13.2258065 7.95644283,11.8709677 L0.554950595,11.8709677 C0.206493245,13.1935484 0,14.5677419 0,16 C0,17.4322581 0.206493245,18.8064516 0.554950595,20.1290323 L7.94998992,20.1290323 C7.82093164,18.7741935 7.74349667,17.3870968 7.74349667,16 Z M10.2923977,22.1935484 C11.2280702,27.9548387 13.4349667,32 16.0032265,32 C18.5714862,32 20.7783827,27.9548387 21.7140553,22.1935484 L10.2923977,22.1935484 Z M20.5718895,31.3290323 C25.17927,29.9612903 28.9219601,26.5741935 30.7674934,22.1935484 L23.7983464,22.1935484 C23.23049,25.8645161 22.1464005,29.1483871 20.5718895,31.3290323 Z M1.24541238,22.1935484 C3.09094576,26.5741935 6.8271829,29.9612903 11.4410163,31.3290323 C9.86650534,29.1483871 8.78241581,25.8645161 8.21455939,22.1935484 L1.24541238,22.1935484 Z",
    id: title != null ? "distanceContractLaw-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=DistanceContractLaw.js.map