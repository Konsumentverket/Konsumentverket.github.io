import { css } from '@emotion/react';
import { newColors } from '@konsumentverket-sverige/designsystem.utils';

export const kovBlackStyle = css`
  color: #161616;
  html[data-theme='dark'] & {
    color: ${newColors.shades.lightBlue};
  }
`;

export const kovBlueStyle = css`
  color: #162259;
  html[data-theme='dark'] & {
    color: ${newColors.shades.lightBlue};
  }
`;

export const visuallyHiddenStyle = css`
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;
