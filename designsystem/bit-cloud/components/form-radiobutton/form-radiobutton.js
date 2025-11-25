/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import {
  wrapperStyle,
  labelStyle,
  fieldStyle,
  labelPrimaryStyle,
} from './form-radiobutton.css.js';

export const FormRadiobutton = ({
  name,
  id,
  labelText,
  value,
  onChange,
  disabled = false,
  checked = false,
  usePrimaryColor = false,
}) => (
  <div
    data-comp="form-radiobutton"
    css={[wrapperStyle, fieldStyle]}
    data-checked={checked}
  >
    <input
      id={id}
      name={name}
      type="radio"
      className="radio"
      css={fieldStyle}
      value={value}
      disabled={disabled}
      aria-disabled={disabled}
      onChange={onChange}
      checked={checked}
    />
    <label
      className='radio-label'
      htmlFor={id}
      css={[labelStyle, usePrimaryColor && labelPrimaryStyle]}
    >
      {labelText}
    </label>
  </div>
)

