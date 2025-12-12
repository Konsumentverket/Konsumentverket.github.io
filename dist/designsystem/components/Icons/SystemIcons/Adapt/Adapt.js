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
    d: "M7.57533795,4 L0,18.1562809 L3.00362677,19.7599736 L4.3316848,17.2713485 L9.78766897,17.2713485 L11.2812397,14.5057699 L5.82459611,14.5057699 L8.79195516,8.86646884 L11.5014837,14.1008902 L13.3445434,10.6541378 L9.78766897,4 L7.57533795,4 Z M16.4240026,8.42334322 L11.0220903,18.5433564 L13.3267392,19.7599736 L14.6350148,17.2713485 L20.239367,17.2713485 L21.5661062,19.7599736 L24,18.4701616 L18.6350148,8.42334322 L16.4240026,8.42334322 Z M17.4368612,11.7415101 L19.0590175,15.0596769 L15.8160237,15.0596769 L17.4368612,11.7415101 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Adapt.js.map