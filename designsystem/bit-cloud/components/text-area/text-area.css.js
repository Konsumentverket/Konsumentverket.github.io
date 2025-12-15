import { css } from '@emotion/react';
import { colors, newColors } from '@konsumentverket-sverige/designsystem.utils';

export const TextAreaStyle = css`
  border-radius: 8px;
  border: 1px solid ${newColors.shades.fullBlue};
  padding: 0 16px;
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 24px;
`;

export const TextAreaWrapperStyle = css`
  position: relative;
`;

export const Label = css`
  display: block;
  font-weight: 700;
  margin-bottom: 18px;
`;

export const invalidStyle = css`
  textarea {
    border-color: #b50156;
  }
`;
