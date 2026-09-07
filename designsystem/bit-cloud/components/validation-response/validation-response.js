/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { wrapperStyle } from './validation-response.css.js';
import { Check } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/Check/Check.js';
import { Warn } from '@konsumentverket-sverige/designsystem.icons-system/dist/SystemIcons/Warn/Warn.js';

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
