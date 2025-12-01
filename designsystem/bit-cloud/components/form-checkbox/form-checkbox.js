/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'

import {
  wrapperStyle,
  checkboxStyle,
  labelStyle,
  labelPrimaryStyle,
  statsStyle,
} from './form-checkbox.css.js'

export const FormCheckbox = ({
  name,
  id,
  labelText,
  value,
  onChange,
  disabled = false,
  checked = false,
  usePrimaryColor = false,
  stats = null,
}) => (
  <div
    data-comp="form-checkbox"
    css={[wrapperStyle, checkboxStyle]}
    data-checked={checked}
  >
    <input
      id={id}
      name={name}
      type='checkbox'
      className='checkbox'
      css={checkboxStyle}
      value={value}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
      aria-disabled={disabled}
    />
    <label
      htmlFor={id}
      css={[labelStyle, usePrimaryColor && labelPrimaryStyle]}
      className='checkbox-label'
    >
      <span className="underline">{labelText}</span>
      {stats?.number &&
        <>
          <span className="sr-only">
            {stats.label}
          </span>
        <span css={statsStyle}
              aria-hidden="true"
        >
          ({stats.number})
        </span>
        </>
      }
    </label>
  </div>
)
