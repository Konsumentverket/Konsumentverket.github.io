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
    height: "29px",
    viewBox: "0 0 32 29"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-1060.000000, -2013.000000)"
  }, (0, _core.jsx)("path", {
    d: "M1074.22097,2018.33333 L1081.33208,2018.33333 C1081.63208,2018.33333 1081.92653,2018.35556 1082.21541,2018.37778 C1082.21541,2018.36111 1082.22097,2018.35 1082.22097,2018.33333 C1082.22097,2015.38889 1079.83208,2013 1076.88764,2013 C1073.94319,2013 1071.5543,2015.38889 1071.5543,2018.33333 C1071.5543,2018.45 1071.58208,2018.56111 1071.58764,2018.67778 C1072.43208,2018.46111 1073.30986,2018.33333 1074.22097,2018.33333 M1083.99875,2029 C1083.50986,2029 1083.10986,2028.6 1083.10986,2028.11111 C1083.10986,2027.62222 1083.50986,2027.22222 1083.99875,2027.22222 C1084.48764,2027.22222 1084.88764,2027.62222 1084.88764,2028.11111 C1084.88764,2028.6 1084.48764,2029 1083.99875,2029 M1091.10986,2025.44444 L1089.47097,2025.44444 C1088.98208,2024.33333 1088.27097,2023.35 1087.39319,2022.52778 L1088.44319,2018.33333 L1086.66541,2018.33333 C1085.03208,2018.33333 1083.58764,2019.08333 1082.60986,2020.23889 C1082.18764,2020.17778 1081.77097,2020.11111 1081.33208,2020.11111 L1074.22097,2020.11111 C1069.92097,2020.11111 1066.33764,2023.16667 1065.50986,2027.22222 L1063.10986,2027.22222 C1062.28764,2027.22222 1061.63764,2026.47222 1061.8043,2025.62222 C1061.92653,2024.98889 1062.52097,2024.55556 1063.16541,2024.55556 L1063.22097,2024.55556 C1063.4043,2024.55556 1063.5543,2024.40556 1063.5543,2024.22222 L1063.5543,2023.11111 C1063.5543,2022.92778 1063.4043,2022.77778 1063.22097,2022.77778 C1061.63764,2022.77778 1060.22653,2023.91111 1060.02653,2025.47778 C1059.78208,2027.37778 1061.25986,2029 1063.10986,2029 L1065.33208,2029 C1065.33208,2031.9 1066.74319,2034.45 1068.88764,2036.07222 L1068.88764,2040.55556 C1068.88764,2041.04444 1069.28764,2041.44444 1069.77653,2041.44444 L1073.33208,2041.44444 C1073.82097,2041.44444 1074.22097,2041.04444 1074.22097,2040.55556 L1074.22097,2037.88889 L1081.33208,2037.88889 L1081.33208,2040.55556 C1081.33208,2041.04444 1081.73208,2041.44444 1082.22097,2041.44444 L1085.77653,2041.44444 C1086.26541,2041.44444 1086.66541,2041.04444 1086.66541,2040.55556 L1086.66541,2036.07222 C1087.32097,2035.57778 1087.9043,2034.99444 1088.4043,2034.33333 L1091.10986,2034.33333 C1091.59875,2034.33333 1091.99875,2033.93333 1091.99875,2033.44444 L1091.99875,2026.33333 C1091.99875,2025.84444 1091.59875,2025.44444 1091.10986,2025.44444",
    id: title != null ? "loanSaveInvest-".concat(title) : null
  }))));
};

exports["default"] = _default;

//# sourceMappingURL=LoanSaveInvest.js.map