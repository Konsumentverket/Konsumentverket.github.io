"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputRadio = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _InputRadio = require("./InputRadio.css");

/** @jsx jsx */
var InputRadio = function InputRadio(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      fieldWrapperStyle = _ref.fieldWrapperStyle,
      fieldInputStyle = _ref.fieldInputStyle,
      fieldLabelStyle = _ref.fieldLabelStyle,
      _onChange = _ref.onChange,
      value = _ref.value,
      checked = _ref.checked,
      disabled = _ref.disabled,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      dataQuestion = _ref.dataQuestion,
      dataAnswer = _ref.dataAnswer;
  var inputRef = (0, _react.useRef)(null);
  return (0, _core.jsx)("div", {
    css: [_InputRadio.fieldWrapper, disabled && _InputRadio.disabledStyle, fieldWrapperStyle],
    className: "".concat(checked ? "inputHasValue" : "", " ").concat(className)
  }, (0, _core.jsx)("label", {
    className: "radiolabel",
    css: [_InputRadio.fieldLabel, fieldLabelStyle],
    htmlFor: id
  }, (0, _core.jsx)("input", {
    ref: inputRef,
    css: [_InputRadio.fieldInput, fieldInputStyle],
    id: id,
    name: name,
    type: "radio",
    tabIndex: tabIndex,
    onChange: function onChange(e) {
      if (_onChange && !document.body.classList.contains('tabnav')) {
        _onChange(e);
      }
    },
    value: value,
    checked: checked,
    disabled: disabled,
    onKeyUp: function onKeyUp(e) {
      //32 == space
      if (e.which === 32 || e.key == 'Enter') {
        _onChange(e);
      }
    },
    "data-question": dataQuestion,
    "data-answer": dataAnswer
  }), labelText));
};

exports.InputRadio = InputRadio;

//# sourceMappingURL=InputRadio.js.map