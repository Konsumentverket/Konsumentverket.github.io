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
    height: "24px",
    viewBox: "0 0 32 24"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-961.000000, -2015.000000)"
  }, (0, _core.jsx)("path", {
    d: "M967,2033 L987,2033 L987,2028 L981.530313,2022.53031 C981.237437,2022.23744 980.762563,2022.23744 980.469625,2022.53031 L973,2030 L970.530313,2027.53031 C970.237438,2027.23744 969.762562,2027.23744 969.469625,2027.53031 L967,2030 L967,2033 Z M969,2020.5 C967.619312,2020.5 966.5,2021.61931 966.5,2023 C966.5,2024.38069 967.619312,2025.5 969,2025.5 C970.380688,2025.5 971.5,2024.38069 971.5,2023 C971.5,2021.61931 970.380688,2020.5 969,2020.5 L969,2020.5 Z M989.625,2036 L964.375,2036 C964.167937,2036 964,2035.83206 964,2035.625 L964,2018.375 C964,2018.16794 964.167937,2018 964.375,2018 L989.625,2018 C989.832063,2018 990,2018.16794 990,2018.375 L990,2035.625 C990,2035.83206 989.832063,2036 989.625,2036 L989.625,2036 Z M990,2015 L964,2015 C962.343125,2015 961,2016.34313 961,2018 L961,2036 C961,2037.65687 962.343125,2039 964,2039 L990,2039 C991.656875,2039 993,2037.65687 993,2036 L993,2018 C993,2016.34313 991.656875,2015 990,2015 L990,2015 Z",
    id: title != null ? "undefinedpicture-".concat(title) : null
  }))));
};

exports["default"] = _default;

//# sourceMappingURL=NotDefinedPicture.js.map