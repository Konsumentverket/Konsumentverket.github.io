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
    "aria-hidden": "true",
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M15.9225806,14.1 C16.0741935,14.2516129 16.0741935,14.4968065 15.9225806,14.6483871 L14.6451613,15.9225806 C14.4935484,16.0741935 14.2484194,16.0741935 14.0967742,15.9225806 L12,13.8064516 L9.9,15.9225806 C9.74841935,16.0741935 9.50322581,16.0741935 9.3516129,15.9225806 L8.07741935,14.6451613 C7.92583871,14.4935484 7.92583871,14.2484194 8.07741935,14.0967742 L10.1935484,12 L8.07741935,9.9 C7.92583871,9.74841935 7.92583871,9.50322581 8.07741935,9.3516129 L9.35483871,8.07419355 C9.50648387,7.92258065 9.7516129,7.92258065 9.90322581,8.07419355 L12,10.1935484 L14.1,8.07741935 C14.2516129,7.92583871 14.4968065,7.92583871 14.6483871,8.07741935 L15.9258387,9.35483871 C16.0774516,9.50648387 16.0774516,9.7516129 15.9258387,9.90322581 L13.8064516,12 L15.9225806,14.1 Z M12,4 C7.58064516,4 4,7.58064516 4,12 C4,16.4193548 7.58064516,20 12,20 C16.4193548,20 20,16.4193548 20,12 C20,7.58064516 16.4193548,4 12,4 L12,4 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Clear.js.map