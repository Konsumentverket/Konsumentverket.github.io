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
    height: "27px",
    viewBox: "0 0 32 27"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M16,0 C12.1338889,0 9,2.97474609 9,6.64453125 C9,9.61136719 13.575,15.01875 15.3277778,16.9815234 C15.6827778,17.3791406 16.3177778,17.3791406 16.6722222,16.9815234 C18.425,15.01875 23,9.61136719 23,6.64453125 C23,2.97474609 19.8661111,0 16,0 Z M16,8.859375 C14.7111111,8.859375 13.6666667,7.86796875 13.6666667,6.64453125 C13.6666667,5.42109375 14.7111111,4.4296875 16,4.4296875 C17.2888889,4.4296875 18.3333333,5.42109375 18.3333333,6.64453125 C18.3333333,7.86796875 17.2888889,8.859375 16,8.859375 Z M1.11777778,11.3879883 C0.442815432,11.6442448 0.000161653935,12.2646924 0,12.9547266 L0,26.1551953 C0,26.7521484 0.635,27.1603125 1.21888889,26.9388281 L8.88888889,23.625 L8.88888889,11.3336719 C8.39777778,10.4909766 7.99611111,9.67042969 7.70833333,8.88574219 L1.11777778,11.3879883 Z M16,18.9669727 C15.2183333,18.9669727 14.4788889,18.6410742 13.9716667,18.0725977 C12.8794444,16.8491602 11.7177778,15.455918 10.6666667,14.0268164 L10.6666667,23.6244727 L21.3333333,26.9994727 L21.3333333,14.0273437 C20.2822222,15.455918 19.1211111,16.8496875 18.0283333,18.073125 C17.5211111,18.6410742 16.7816667,18.9669727 16,18.9669727 Z M30.7811111,8.49867187 L23.1111111,11.8125 L23.1111111,27 L30.8822222,24.0495117 C31.5572855,23.7933742 32,23.1728523 32,22.4827734 L32,9.28230469 C32,8.68535156 31.365,8.2771875 30.7811111,8.49867187 L30.7811111,8.49867187 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=Map.js.map