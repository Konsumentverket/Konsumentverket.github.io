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
    width: "31px",
    height: "32px",
    viewBox: "0 0 31 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M29.8736456,1.53840565 L23.5767658,0.0385915824 C22.891738,-0.124596088 22.1915128,0.241841795 21.9143896,0.909279993 L19.0081374,7.90909981 C18.7531083,8.52337623 18.922527,9.23771889 19.4236103,9.66091414 L23.093783,12.7606674 C20.9157287,17.5528599 17.1033918,21.5424266 12.3619018,23.838679 L9.35901673,20.050175 C8.94904644,19.5329275 8.25702719,19.3580437 7.66194708,19.6212996 L0.880873555,22.6213027 C0.234474626,22.9072405 -0.12075416,23.6299912 0.0373943974,24.3373045 L1.49033886,30.8373113 C1.64134288,31.5127495 2.22495466,32 2.90622861,32 C18.411508,32 31,19.0292364 31,2.99996968 C31,2.30146895 30.5329411,1.69540581 29.8736456,1.53840565 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=CallUs.js.map