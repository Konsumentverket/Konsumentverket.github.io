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
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M10.7133001,17.8758145 C10.1705634,17.3491759 9.89919509,16.7259486 9.89919509,15.9992334 L9.89919509,0 L14.0364124,0 L14.0364124,15.3323112 L20.9356075,15.3323112 L20.9356075,18.6646225 L12.6565734,18.6646225 C11.9068609,18.6646225 11.2560368,18.402453 10.7133001,17.8758145 M3.81410502,23.220391 C3.27136834,22.7029513 3,22.0728248 3,21.3323112 L3,5.33077808 L7.13721732,5.33077808 L7.13721732,20.665389 L14.0364124,20.665389 L14.0364124,24 L5.75737831,24 C5.00766577,24 4.3568417,23.7401303 3.81410502,23.220391"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Easytoread.js.map