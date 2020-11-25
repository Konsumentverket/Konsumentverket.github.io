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
    transform: "translate(-1066.000000, -1836.000000)"
  }, (0, _core.jsx)("path", {
    d: "M1094.50012,1850.00014 L1084.00002,1850.00014 L1084.00002,1848.00012 L1079.99998,1848.00012 L1079.99998,1850.00014 L1070.41426,1850.00014 C1069.88363,1850.00014 1069.3755,1850.21076 1068.99987,1850.58577 L1066.29297,1853.29329 C1065.90234,1853.68392 1065.90234,1854.31705 1066.29297,1854.70768 L1068.99987,1857.41458 C1069.37488,1857.78959 1069.88363,1858.00021 1070.41426,1858.00021 L1094.50012,1858.00021 C1095.32826,1858.00021 1096.00014,1857.32833 1096.00014,1856.5002 L1096.00014,1851.50015 C1096.00014,1850.67202 1095.32826,1850.00014 1094.50012,1850.00014 L1094.50012,1850.00014 Z M1079.99998,1867.0003 C1079.99998,1867.55281 1080.44748,1868.00031 1080.99998,1868.00031 L1083.00001,1868.00031 C1083.55252,1868.00031 1084.00002,1867.55281 1084.00002,1867.0003 L1084.00002,1860.00023 L1079.99998,1860.00023 L1079.99998,1867.0003 Z M1097.70703,1841.29318 L1095.00013,1838.58565 C1094.62512,1838.21065 1094.11637,1838.00002 1093.58574,1838.00002 L1084.00002,1838.00002 L1084.00002,1837 C1084.00002,1836.4475 1083.55252,1836 1083.00001,1836 L1080.99999,1836 C1080.44748,1836 1079.99998,1836.4475 1079.99998,1837 L1079.99998,1838.00002 L1069.49988,1838.00002 C1068.67174,1838.00002 1067.99986,1838.6719 1067.99986,1839.50003 L1067.99986,1844.50008 C1067.99986,1845.32822 1068.67174,1846.0001 1069.49988,1846.0001 L1093.58574,1846.0001 C1094.11637,1846.0001 1094.6245,1845.78947 1095.00013,1845.41447 L1097.70703,1842.70757 C1098.09766,1842.31631 1098.09766,1841.68381 1097.70703,1841.29318 L1097.70703,1841.29318 Z",
    id: title != null ? "brokerservices-".concat(title) : null
  }))));
};

exports["default"] = _default;

//# sourceMappingURL=BrokerServices.js.map