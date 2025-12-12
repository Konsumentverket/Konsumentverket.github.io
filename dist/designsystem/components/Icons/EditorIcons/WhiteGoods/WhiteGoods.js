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
    width: "25px",
    height: "32px",
    viewBox: "0 0 25 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-915.000000, -532.000000)"
  }, (0, _core.jsx)("g", {
    transform: "translate(915.000000, 532.000000)"
  }, (0, _core.jsx)("path", {
    d: "M16.6666667,9 L16.6666667,2 C16.6666667,0.8954375 17.5994141,0 18.75,0 C19.9005859,0 20.8333333,0.8954375 20.8333333,2 L20.8333333,9 L16.6666667,9 Z M23.9583333,10 L1.04166667,10 C0.466341146,10 0,10.4476875 0,11 L0,13 C0,13.5523125 0.466341146,14 1.04166667,14 L2.08333333,14 L2.08333333,16 C2.08333333,20.837875 5.66204427,24.8731875 10.4166667,25.79975 L10.4166667,32 L14.5833333,32 L14.5833333,25.79975 C19.3379557,24.8731875 22.9166667,20.837875 22.9166667,16 L22.9166667,14 L23.9583333,14 C24.5336589,14 25,13.5523125 25,13 L25,11 C25,10.4476875 24.5336589,10 23.9583333,10 Z M8.33333333,9 L8.33333333,2 C8.33333333,0.8954375 7.40058594,0 6.25,0 C5.09941406,0 4.16666667,0.8954375 4.16666667,2 L4.16666667,9 L8.33333333,9 Z",
    id: title != null ? "whitegoods-".concat(title) : null
  })))));
};

exports["default"] = _default;

//# sourceMappingURL=WhiteGoods.js.map