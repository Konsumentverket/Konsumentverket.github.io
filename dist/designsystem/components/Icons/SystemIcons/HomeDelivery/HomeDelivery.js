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
    d: "M3,22.4945895 C3,23.3242503 3.67029096,23.9945413 4.49995179,23.9945413 C5.32961262,23.9945413 5.99990358,23.3242503 5.99990358,22.4945895 L5.99990358,19.0025142 C5.24992769,18.3603474 3.0281241,16.4432215 3,16.4197848 L3,22.4945895 Z M20.2494456,4.49985537 L12.7496866,4.49985537 C12.3371999,4.49985537 11.9997107,4.83734452 11.9997107,5.24983127 L11.9997107,10.4996625 L10.809124,10.4996625 L9.24823668,7.60288064 C8.7279409,6.61384992 7.71078609,5.99980716 6.59519695,5.99980716 L5.24992769,5.99980716 C4.00778011,5.99980716 3,7.00758727 3,8.24973485 L3,13.0777047 C3,13.954239 3.38436265,14.7838998 4.04996625,15.3557565 L7.61235175,18.4072209 L8.27326801,22.743019 C8.32014151,23.0101979 8.7466903,24.1820353 9.99821257,23.9757919 C10.8138114,23.8398588 11.3669186,23.0664461 11.2309854,22.2508473 L10.5700692,17.9150492 C10.4528855,17.2213215 10.0966469,16.5885293 9.56228908,16.1291691 L7.49985537,14.3620384 L7.49985537,10.6918439 L8.99980716,13.4995661 L20.2494456,13.4995661 C20.6619323,13.4995661 20.9994215,13.162077 20.9994215,12.7495902 L20.9994215,5.24983127 C20.9994215,4.83265717 20.6619323,4.49985537 20.2494456,4.49985537 Z M6.74987948,4.49985537 C7.99202705,4.49985537 8.99980716,3.49207526 8.99980716,2.24992769 C8.99980716,1.00778011 7.99202705,0 6.74987948,0 C5.5077319,0 4.49995179,1.00778011 4.49995179,2.24992769 C4.49995179,3.49207526 5.5077319,4.49985537 6.74987948,4.49985537 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=HomeDelivery.js.map