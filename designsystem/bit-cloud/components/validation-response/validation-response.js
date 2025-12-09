/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { wrapperStyle } from './validation-response.css.js';
import {
  Check,
  Warn,
} from '@konsumentverket-sverige/designsystem.icons-system';

const ValidationResponse = ({ success = false, text = '', children }) => {
  return (
    <div css={wrapperStyle(success)}>
      {success ? <Check /> : <Warn />}
      <p>{text}</p>
      {children && { children }}
    </div>
  );
};

export { ValidationResponse };
