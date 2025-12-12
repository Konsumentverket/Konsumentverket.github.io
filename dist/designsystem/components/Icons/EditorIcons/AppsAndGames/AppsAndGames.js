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
    height: "28px",
    viewBox: "0 0 32 28"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-514.000000, -2018.000000)"
  }, (0, _core.jsx)("path", {
    d: "M525.333313,2039.5 L525.333313,2044.5 C525.333313,2045.32844 526.004875,2046 526.833313,2046 L533.166625,2046 C533.995063,2046 534.666625,2045.32844 534.666625,2044.5 L534.666625,2039.5 C534.666625,2038.67156 533.995063,2038 533.166625,2038 L526.833313,2038 C526.004875,2038 525.333313,2038.67156 525.333313,2039.5 M538.166687,2046 L544.5,2046 C545.328437,2046 546,2045.32844 546,2044.5 L546,2039.5 C546,2038.67156 545.328437,2038 544.5,2038 L538.166687,2038 C537.33825,2038 536.666687,2038.67156 536.666687,2039.5 L536.666687,2044.5 C536.666687,2045.32844 537.33825,2046 538.166687,2046 M538.166687,2036 L544.5,2036 C545.328437,2036 546,2035.32844 546,2034.5 L546,2029.5 C546,2028.67156 545.328437,2028 544.5,2028 L538.166687,2028 C537.33825,2028 536.666687,2028.67156 536.666687,2029.5 L536.666687,2034.5 C536.666687,2035.32844 537.33825,2036 538.166687,2036 M514,2039.5 L514,2044.5 C514,2045.32844 514.671563,2046 515.5,2046 L521.833313,2046 C522.66175,2046 523.333313,2045.32844 523.333313,2044.5 L523.333313,2039.5 C523.333313,2038.67156 522.66175,2038 521.833313,2038 L515.5,2038 C514.671563,2038 514,2038.67156 514,2039.5 M521.833313,2028 L515.5,2028 C514.671563,2028 514,2028.67156 514,2029.5 L514,2034.5 C514,2035.32844 514.671563,2036 515.5,2036 L521.833313,2036 C522.66175,2036 523.333313,2035.32844 523.333313,2034.5 L523.333313,2029.5 C523.333313,2028.67156 522.66175,2028 521.833313,2028 M534.666687,2024.5 L534.666687,2019.5 C534.666687,2018.67156 533.995125,2018 533.166687,2018 L526.833313,2018 C526.004875,2018 525.333313,2018.67156 525.333313,2019.5 L525.333313,2024.5 C525.333313,2025.32844 526.004875,2026 526.833313,2026 L533.166625,2026 C533.995125,2026 534.666687,2025.32844 534.666687,2024.5 M536.666687,2019.5 L536.666687,2024.5 C536.666687,2025.32844 537.33825,2026 538.166687,2026 L544.5,2026 C545.328437,2026 546,2025.32844 546,2024.5 L546,2019.5 C546,2018.67156 545.328437,2018 544.5,2018 L538.166687,2018 C537.33825,2018 536.666687,2018.67156 536.666687,2019.5 M534.666687,2034.5 L534.666687,2029.5 C534.666687,2028.67156 533.995125,2028 533.166687,2028 L526.833313,2028 C526.004875,2028 525.333313,2028.67156 525.333313,2029.5 L525.333313,2034.5 C525.333313,2035.32844 526.004875,2036 526.833313,2036 L533.166625,2036 C533.995125,2036 534.666687,2035.32844 534.666687,2034.5 M523.333313,2019.5 L523.333313,2024.5 C523.333313,2025.32844 522.66175,2026 521.833313,2026 L515.5,2026 C514.671563,2026 514,2025.32844 514,2024.5 L514,2019.5 C514,2018.67156 514.671563,2018 515.5,2018 L521.833313,2018 C522.66175,2018 523.333313,2018.67156 523.333313,2019.5",
    id: title != null ? "ang-".concat(title) : null
  }))));
};

exports["default"] = _default;

//# sourceMappingURL=AppsAndGames.js.map