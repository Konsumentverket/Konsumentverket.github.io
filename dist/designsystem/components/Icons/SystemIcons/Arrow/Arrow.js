"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrowPath = void 0;

var _core = require("@emotion/core");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var arrowPath = 'M18.8200426,7.70004261 C18.4334198,7.31341975 17.8080945,7.31122597 17.4179582,7.70051231 L12.7020418,12.4061544 C12.3143148,12.7930366 11.6880945,12.7954407 11.2979582,12.4061544 L6.58204182,7.70051231 C6.19431483,7.31363005 5.56955624,7.31044376 5.17995739,7.70004261 L4.70004261,8.17995739 C4.31341975,8.56658025 4.3235178,9.2035178 4.70994663,9.58994663 L11.2900534,16.1700534 C11.6821461,16.5621461 12.3235178,16.5564822 12.7099466,16.1700534 L19.2900534,9.58994663 C19.6821461,9.19785393 19.6895562,8.56955624 19.2999574,8.17995739 L18.8200426,7.70004261 Z';
exports.arrowPath = arrowPath;

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
    d: arrowPath
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Arrow.js.map