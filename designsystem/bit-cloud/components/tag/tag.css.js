import { css } from '@emotion/react';
import { newColors } from '@konsumentverket-sverige/designsystem.utils';

export const tagStyle = {
  style: css`
    border: 1px solid ${newColors.shades.fullBlue};
    border-radius: 32px;
    color: ${newColors.shades.fullBlue};
    padding: 8px 16px;
    font-size: 1.6rem;
    line-height: 1.5;
    display: inline-block;
    text-decoration: none;
    margin: 0;

    &:hover {
      background-color: ${newColors.shades.lightBlue};
      text-decoration: underline;
    }

    &:active {
      text-decoration: underline;
      background-color: ${newColors.shades.mediumBlue50};
    }

    html[data-theme='dark'] & {
      border: 1px solid ${newColors.shades.mediumBlue};
      color: ${newColors.shades.mediumBlue};

      &:hover {
        background-color: ${newColors.shades.kovBlue};
      }

      &:active {
        background-color: ${newColors.shades.kovBlue};
      }
    }
  `,
};
