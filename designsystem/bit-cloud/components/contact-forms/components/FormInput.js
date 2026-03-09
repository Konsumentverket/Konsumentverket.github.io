/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  characterCountInput,
  exceededMaxCount,
  inputError,
  inputWrapper,
  resetRightPadding,
  labelWrapper,
  inputStyle,
  labelStyle,
  formInputWrapper,
} from '../contact-forms.css';
import ToolTip from './ToolTip';
import ErrorMessage from './ErrorMessage';

const FormInput = ({
  id,
  label,
  placeholder,
  tooltipText,
  tooltipLabel,
  tooltipPosition = 'left',
  error,
  maxLengthValidation = false,
  showCounter = false,
  maxLengthCount = 40,
  register,
  validation,
  watch,
  ...otherAttributes
}) => {
  return (
    <div css={formInputWrapper}>
      <div css={labelWrapper}>
        <label htmlFor={id} css={labelStyle}>
          {label}
        </label>

        {!!tooltipText && (
          <ToolTip
            position={tooltipPosition}
            id={id}
            text={tooltipText}
            label={tooltipLabel}
          />
        )}
      </div>

      <span css={[inputWrapper, !showCounter ? resetRightPadding : null]}>
        <input
          id={id}
          placeholder={placeholder}
          aria-describedby={`tooltip-${id} error-${id}`}
          aria-invalid={Boolean(error)}
          css={[inputStyle, error ? inputError : null]}
          {...register(id, validation)}
          maxLength={maxLengthValidation ? maxLengthCount : undefined}
          {...otherAttributes}
        />

        {maxLengthValidation && showCounter && (
          <span
            aria-hidden={true}
            css={[
              characterCountInput,
              watch(id, '').length > maxLengthCount ? exceededMaxCount : null,
            ]}
          >
            {watch(id, '').length}/{maxLengthCount}
          </span>
        )}
      </span>

      {error && <ErrorMessage id={`error-${id}`}>{error.message}</ErrorMessage>}
    </div>
  );
};

export default FormInput;
