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
    transform: "translate(-1002.000000, -1647.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(1002.000000, 1647.000000)"
  }, (0, _core.jsx)("path", {
    d: "M17.0245998,0.41233893 C16.4435767,-0.13744631 15.5376806,-0.13744631 14.9566576,0.41233893 C11.957829,3.2737212 3.34869192,11.5579852 1.99921906,13.0511519 C0.793440062,14.3818821 0,16.1374463 0,18.0866849 C0,22.4912144 3.42991019,25.971105 7.71573604,25.9898477 C10.0085904,25.9960953 12.070285,25.0089809 13.4947286,23.4345959 C13.4884811,25.7212027 13.4447481,26.7020695 10.2210074,28.1452558 C9.34010152,28.538852 8.8340492,29.4947286 9.05271378,30.4318626 C9.25888325,31.3377587 10.071066,31.9812573 11.0019524,31.9812573 L20.9605623,31.9812573 C21.928934,31.9812573 22.7848497,31.3065209 22.9660289,30.3568918 C23.1409606,29.4447481 22.666146,28.5326045 21.8164779,28.1577509 C18.5927372,26.7208122 18.5177665,25.7774307 18.5052714,23.4345959 C19.9672003,25.0464662 22.0976181,26.0460758 24.4591956,25.9836002 C28.6762983,25.8773916 32,22.453729 32,18.2366263 C32,16.2249121 31.2377977,14.4131199 30.0007809,13.0449043 C28.638813,11.5579852 20.0296759,3.2737212 17.0245998,0.41233893",
    id: title != null ? "winBig-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=LotteryAndGames.js.map