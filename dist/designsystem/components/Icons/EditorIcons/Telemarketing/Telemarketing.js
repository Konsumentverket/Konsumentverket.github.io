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
    transform: "translate(-256.000000, -1465.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(256.000000, 1465.000000)"
  }, (0, _core.jsx)("path", {
    d: "M23.1518626,10.015625 C22.4397116,8.76920808 21.1142605,8 19.6787436,8 L12.3212564,8 C10.8857395,8 9.56028835,8.76920808 8.84813739,10.015625 L2.2637738,21.53875 C2.09097114,21.8409881 2.00002426,22.1830995 2.00002426,22.53125 L2.00002426,26 C2.00002426,27.1045695 2.89545321,28 4.00002426,28 L27.9999792,28 C29.1045468,28 29.9999757,27.1045695 29.9999757,26 L29.9999757,22.53125 C29.9999757,22.1830995 29.9090289,21.8409881 29.7362262,21.53875 L23.1518626,10.015625 Z M16.0000078,22 C13.5147229,22 11.5000078,19.9852814 11.5000078,17.5 C11.5000078,15.0147186 13.5147229,13 16.0000078,13 C18.4852771,13 20.4999922,15.0147186 20.4999922,17.5 C20.4999922,19.9852814 18.4852771,22 16.0000078,22 Z M31.6362229,5.6875 C27.2974804,2.0625 21.7112401,0 16,0 C10.2887599,0 4.70251957,2.0625 0.363777092,5.6875 C0.131632794,5.88405792 -0.00155705051,6.17332297 1.37391112e-05,6.4775 L1.37391112e-05,10 C1.37391112e-05,10.5522847 0.447742197,11 1.00002599,11 L5.3818934,11 C5.7607214,11 6.10697809,10.7857738 6.27626685,10.446875 L8.00001374,6 C10.4937595,4.92 13.2000049,4.5 16,4.5 C18.7981202,4.5 21.5043655,4.92 23.9999861,6 L25.7237332,10.446875 C25.8930219,10.7857738 26.2392786,11 26.6181066,11 L30.999974,11 C31.5522578,11 31.9999863,10.5522847 31.9999863,10 L31.9999863,6.4775 C32.0015571,6.17332297 31.8683672,5.88405792 31.6362229,5.6875 L31.6362229,5.6875 Z",
    id: title != null ? "telemarketing-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=Telemarketing.js.map