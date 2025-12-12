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
    height: "25px",
    viewBox: "0 0 32 25"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-912.000000, -1835.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(912.000000, 1835.000000)"
  }, (0, _core.jsx)("path", {
    d: "M12.8,16.40625 L12.799,16.40625 C12.799,15.6162109 12.866,15.9799805 8.5465,7.54345703 C7.664,5.8203125 5.137,5.81689453 4.253,7.54345703 C-0.103,16.0522461 0.001,15.6411133 0.001,16.40625 L0,16.40625 C0,18.5634766 2.8655,20.3125 6.4,20.3125 C9.9345,20.3125 12.8,18.5634766 12.8,16.40625 Z M6.4,8.59375 L10,15.625 L2.8,15.625 L6.4,8.59375 Z M31.999,16.40625 C31.999,15.6162109 32.066,15.9799805 27.7465,7.54345703 C26.864,5.8203125 24.337,5.81689453 23.453,7.54345703 C19.097,16.0522461 19.201,15.6411133 19.201,16.40625 L19.2,16.40625 C19.2,18.5634766 22.0655,20.3125 25.6,20.3125 C29.1345,20.3125 32,18.5634766 32,16.40625 L31.999,16.40625 Z M22,15.625 L25.6,8.59375 L29.2,15.625 L22,15.625 Z M26.4,21.875 L17.6,21.875 L17.6,7.48291016 C18.7755,6.98046875 19.658,5.94580078 19.9195,4.6875 L26.4,4.6875 C26.842,4.6875 27.2,4.33789062 27.2,3.90625 L27.2,2.34375 C27.2,1.91210937 26.842,1.5625 26.4,1.5625 L19.182,1.5625 C18.452,0.619140625 17.3045,0 16,0 C14.6955,0 13.548,0.619140625 12.818,1.5625 L5.6,1.5625 C5.158,1.5625 4.8,1.91210937 4.8,2.34375 L4.8,3.90625 C4.8,4.33789062 5.158,4.6875 5.6,4.6875 L12.0805,4.6875 C12.342,5.9453125 13.224,6.98046875 14.4,7.48291016 L14.4,21.875 L5.6,21.875 C5.158,21.875 4.8,22.2246094 4.8,22.65625 L4.8,24.21875 C4.8,24.6503906 5.158,25 5.6,25 L26.4,25 C26.842,25 27.2,24.6503906 27.2,24.21875 L27.2,22.65625 C27.2,22.2246094 26.842,21.875 26.4,21.875 Z",
    id: title != null ? "salesLaw-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=SalesLaw.js.map