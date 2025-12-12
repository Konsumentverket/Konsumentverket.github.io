"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormRadiobutton = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _FormRadiobutton = require("./FormRadiobutton.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var FormRadiobutton = function FormRadiobutton(_ref) {
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
  var fieldStyles = [_FormRadiobutton.fieldStyle];
  var labelStyles = [_FormRadiobutton.labelStyle];

  if (invertedBackgroundColor) {
    labelStyles.push(_FormRadiobutton.invertedLabelStyle);
    fieldStyles.push(_FormRadiobutton.invertedfieldStyle);
  }

  style && labelStyles.push(style);
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)("div", {
    css: _FormRadiobutton.wrapperStyle
  }, (0, _core.jsx)("input", {
    id: id,
    name: name,
    type: "radio",
    css: [fieldStyles],
    value: value,
    onChange: onChange,
    checked: checked
  }), (0, _core.jsx)("label", {
    htmlFor: id,
    css: [labelStyles]
  }, labelText)));
};

exports.FormRadiobutton = FormRadiobutton;

//# sourceMappingURL=FormRadiobutton.js.map