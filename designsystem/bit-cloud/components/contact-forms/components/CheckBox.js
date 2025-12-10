/** @jsx jsx */
import { jsx } from '@emotion/react'

import {
  checkboxStyle,
  checkboxLabelStyle,
  labelPrimaryStyle,
  errorMargin,
} from '../contact-forms.css'
import ErrorMessage from "./ErrorMessage";

// This component is a copy of the FormCheckbox component
// but modified to be used with react-hook-form
export const Checkbox = ({
  name,
  id,
  labelText,
  value,
  onChange,
  disabled = false,
  usePrimaryColor = false,
  register,
  validation,
  error
}) => {

  return (
    <div
      data-comp="checkbox"
      css={[
        checkboxStyle,
        error ? errorMargin : null
      ]}
    >
      <input
        id={id}
        name={name}
        type='checkbox'
        className='checkbox'
        css={checkboxStyle}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-disabled={disabled}
        {...register(id, validation)}
      />
      <label
        htmlFor={id}
        css={[checkboxLabelStyle, usePrimaryColor && labelPrimaryStyle]}
        className='checkbox-label'
      >
        {labelText}
      </label>
      {error && (
        <ErrorMessage id={`error-${id}`}>
          {error.message}
        </ErrorMessage>
      )}
    </div>
  )
}
