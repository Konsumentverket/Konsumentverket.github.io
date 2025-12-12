"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

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
    d: "M23.4052342,1.15380424 L18.6825744,0.0289436868 C18.1688035,-0.0934470661 17.6436346,0.181381346 17.4357922,0.681959995 L15.256103,5.93182486 C15.0648312,6.39253217 15.1918952,6.92828917 15.5677077,7.24568561 L18.3203373,9.57050054 C16.6867965,13.1646449 13.8275438,16.1568199 10.2714264,17.8790092 L8.01926255,15.0376313 C7.71178483,14.6496956 7.19277039,14.5185328 6.74646031,14.7159747 L1.66065517,16.965977 C1.17585597,17.1804304 0.90943438,17.7224934 1.0280458,18.2529784 L2.11775415,23.1279835 C2.23100716,23.6345621 2.66871599,24 3.17967146,24 C14.808631,24 24.25,14.2719273 24.25,2.24997726 C24.25,1.72610171 23.8997058,1.27155436 23.4052342,1.15380424 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=CallCenter.js.map