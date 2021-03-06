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
    fillRule: "evenodd"
  }, (0, _core.jsx)("path", {
    d: "M23.85,0 L9.15,0 C7.4109375,0 6,1.34375 6,3 L6,29 C6,30.65625 7.4109375,32 9.15,32 L23.85,32 C25.5890625,32 27,30.65625 27,29 L27,3 C27,1.34375 25.5890625,0 23.85,0 Z M16,30.0606061 C14.89375,30.0606061 14,29.1939394 14,28.1212121 C14,27.0484848 14.89375,26.1818182 16,26.1818182 C17.10625,26.1818182 18,27.0484848 18,28.1212121 C18,29.1939394 17.10625,30.0606061 16,30.0606061 Z M24,23.5151515 C24,23.9151515 23.6383929,24.2424242 23.1964286,24.2424242 L9.80357143,24.2424242 C9.36160714,24.2424242 9,23.9151515 9,23.5151515 L9,4.60606061 C9,4.20606061 9.36160714,3.87878788 9.80357143,3.87878788 L23.1964286,3.87878788 C23.6383929,3.87878788 24,4.20606061 24,4.60606061 L24,23.5151515 Z"
  }), (0, _core.jsx)("path", {
    d: "M21.335227,9.75214067 C20.0508777,8.60550987 18.1407597,8.8117561 16.961877,10.0860631 L16.5001675,10.5844915 L16.038458,10.0860631 C14.861919,8.8117561 12.9494573,8.60550987 11.665108,9.75214067 C10.1932624,11.068188 10.1159202,13.4301984 11.4330814,14.8567348 L15.9681469,19.7624485 C16.2611098,20.0791838 16.7368815,20.0791838 17.0298444,19.7624485 L21.5649099,14.8567348 C22.8844382,13.4301984 22.8070725,11.068188 21.335227,9.75214067"
  })));
};

exports["default"] = _default;

//# sourceMappingURL=DatingServices.js.map