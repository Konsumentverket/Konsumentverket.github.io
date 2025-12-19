/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { wrapperStyle } from './validation-response.css.js';
import {
  Check,
  Warn,
} from '@konsumentverket-sverige/designsystem.icons-system';

const ValidationResponse = ({ success = false, text = '', children }) => {
  // document.documentElement.setAttribute('data-theme', 'dark');
  return (
    <div css={wrapperStyle(success)}>
      {success ? <Check /> : <Warn />}
      <p>{text}</p>
      {children && { children }}
    </div>
  );
};

export { ValidationResponse };
