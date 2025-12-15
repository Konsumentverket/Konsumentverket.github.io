/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  TextAreaStyle,
  TextAreaWrapperStyle,
  Label,
  invalidStyle,
} from './text-area.css.js';
import { useRef, useState } from 'react';

import { VisuallyHidden } from '@konsumentverket-sverige/designsystem.utils';

export const TextArea = ({
  style,
  wrapperStyle,
  placeholder,
  text,
  id,
  onChange,
  onClear,
  validationError,
  name,
  disabled,
  hiddenLabel = false,
  label,
  ...other
}) => {
  
  const inputRef = useRef(null);
  const [addedText, setText] = useState(null);
  const invalid = validationError ? invalidStyle : null;

  return (
    <div css={[TextAreaWrapperStyle, wrapperStyle, invalid]}>
      {label && (
        <label
          css={[Label, hiddenLabel ? VisuallyHidden : null]}
          htmlFor={id || name}
        >
          {label}
        </label>
      )}
      <textarea
        rows="2"
        id={id}
        ref={inputRef}
        {...other}
        css={[TextAreaStyle, style]}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
          setText(e.target.value);
        }}
      >
        {addedText}
      </textarea>
      {validationError}
    </div>
  );
};
