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
    transform: "translate(-747.000000, -2158.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(747.000000, 2158.000000)"
  }, (0, _core.jsx)("path", {
    d: "M6.85714286,27.4285714 C5.59714286,27.4285714 4.57142857,26.4028571 4.57142857,25.1428571 C4.57142857,23.8828571 5.59714286,22.8571429 6.85714286,22.8571429 C8.11714286,22.8571429 9.14285714,23.8828571 9.14285714,25.1428571 C9.14285714,26.4028571 8.11714286,27.4285714 6.85714286,27.4285714 L6.85714286,27.4285714 Z M6.85714286,9.14285714 C5.59714286,9.14285714 4.57142857,8.11714286 4.57142857,6.85714286 C4.57142857,5.59714286 5.59714286,4.57142857 6.85714286,4.57142857 C8.11714286,4.57142857 9.14285714,5.59714286 9.14285714,6.85714286 C9.14285714,8.11714286 8.11714286,9.14285714 6.85714286,9.14285714 L6.85714286,9.14285714 Z M19.8614286,16 L31.7485714,4.11214286 C32.0835714,3.77714286 32.0835714,3.23428571 31.7485714,2.9 C29.4057143,0.557142857 25.6064286,0.557142857 23.2635714,2.9 L15.0128571,11.1514286 L13.2371429,9.37571429 C13.545,8.59571429 13.7142857,7.74642857 13.7142857,6.85714286 C13.7142857,3.07 10.6442857,0 6.85714286,0 C3.07,0 9.57456336e-13,3.07 9.57456336e-13,6.85714286 C9.57456336e-13,10.6442857 3.07,13.7142857 6.85714286,13.7142857 C7.18142857,13.7142857 7.49928571,13.6914286 7.81142857,13.6478571 L10.1635714,16 L7.81142857,18.3521429 C7.49928571,18.3085714 7.18071429,18.2857143 6.85714286,18.2857143 C3.07,18.2857143 9.57456336e-13,21.3557143 9.57456336e-13,25.1428571 C9.57456336e-13,28.93 3.07,32 6.85714286,32 C10.6442857,32 13.7142857,28.93 13.7142857,25.1428571 C13.7142857,24.2535714 13.545,23.4042857 13.2371429,22.6242857 L15.0128571,20.8485714 L23.2635714,29.1 C25.6064286,31.4428571 29.4057143,31.4428571 31.7485714,29.1 C32.0835714,28.7657143 32.0835714,28.2228571 31.7485714,27.8878571 L19.8614286,16 Z",
    id: title != null ? "hairdresser-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=Hairdresser.js.map