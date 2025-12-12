"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCheckbox = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _FormCheckbox = require("./FormCheckbox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var FormCheckbox = function FormCheckbox(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      value = _ref.value,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      style = _ref.style;
  var fieldStyles = [_FormCheckbox.checkbox];
  var labelStyles = [_FormCheckbox.labelStyle];

  if (invertedBackgroundColor) {
    labelStyles.push(_FormCheckbox.invertedLabelStyle);
    fieldStyles.push(_FormCheckbox.invertedfieldStyle);
  }

  style && labelStyles.push(style);
  return (0, _core.jsx)("div", {
    css: [_FormCheckbox.wrapperStyle, _FormCheckbox.checkbox],
    "data-checked": checked
  }, (0, _core.jsx)("input", {
    id: id,
    name: name,
    type: "checkbox",
    className: "checkbox",
    value: value,
    onChange: onChange,
    checked: checked
  }), (0, _core.jsx)("label", {
    htmlFor: id,
    css: [labelStyles],
    className: "checkbox-label"
  }, labelText));
};

exports.FormCheckbox = FormCheckbox;

//# sourceMappingURL=FormCheckbox.js.map