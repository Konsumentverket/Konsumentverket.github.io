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
    height: "20px",
    viewBox: "0 0 32 20"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-860.000000, -2156.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(697.000000, 2156.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(163.000000, 0.000000)"
  }, (0, _core.jsx)("path", {
    d: "M17.6393189,12.554674 C16.2128133,12.9926758 14.9973086,12.7506748 14.3598061,12.554674 L7.10877777,10.3271653 L6.399775,16.0001875 C6.399775,17.7676944 10.6977918,19.2002 15.9998125,19.2002 C21.3018332,19.2002 25.59985,17.7676944 25.59985,16.0001875 L24.8908472,10.3266653 L17.6393189,12.554674 Z M31.1168716,4.46014242 L17.1698171,0.175125684 C16.4098141,-0.058375228 15.5898109,-0.058375228 14.8303079,0.175125684 L0.882753448,4.46014242 C-0.294251149,4.82164383 -0.294251149,6.37814991 0.882753448,6.73965133 L3.31426295,7.48665424 C2.78076086,8.14615682 2.45275958,8.95065996 2.42025945,9.8316634 C1.93875757,10.1077145 1.59975625,10.6057164 1.59975625,11.2001688 C1.59975625,11.7391709 1.88375736,12.1926726 2.29275896,12.4827238 L1.01625397,18.2266962 C0.905253536,18.7261981 1.28525502,19.2002 1.79675702,19.2002 L4.60226798,19.2002 C5.11426998,19.2002 5.49427146,18.7261981 5.38327103,18.2266962 L4.10676604,12.4827238 C4.51576764,12.1926726 4.79976875,11.7391709 4.79976875,11.2001688 C4.79976875,10.6216665 4.47626749,10.1376646 4.01676569,9.8566635 C4.05476584,9.10566057 4.43876734,8.44165798 5.05126973,8.02065633 L14.8298079,11.0251681 C15.2828097,11.1641686 16.1518131,11.3376693 17.1693171,11.0251681 L31.1168716,6.74015133 C32.2943761,6.37814991 32.2943761,4.82214384 31.1168716,4.46014242 L31.1168716,4.46014242 Z"
  }))))));
};

exports["default"] = _default;

//# sourceMappingURL=EducationAndCourses.js.map