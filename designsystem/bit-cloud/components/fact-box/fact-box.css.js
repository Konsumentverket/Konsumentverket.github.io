import { css } from '@emotion/react';
import {
  newColors,
  colors,
  spacing,
  medium,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyling = css`
  width: 100%;
  border-radius: 16px;
  padding: ${spacing.m} ${spacing.s};
  position: relative;
  margin-top: 24px;
  overflow-wrap: break-word;

  ${medium} {
    margin-top: 40px;
    padding: ${spacing.l} ${spacing.l};
  }

  li,
  p {
    ${typography.paragraphNoMargin};

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ul {
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;

      &:before {
        content: '';
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 50%;
        background-color: ${newColors.secondaries.fullGrey};
        border: 1px solid ${newColors.secondaries.fullGrey};
      }
    }
  }
`;

export const themeGrey = css`
  background-color: ${newColors.shades.lightGrey25};
  border: 1px solid ${newColors.shades.lightGrey25};
`;

export const themeBlue = css`
  background-color: ${newColors.primaries.lightOrange};
  border: 1px solid ${newColors.primaries.lightOrange};
`;

export const articleEntryMarginStyling = css`
  margin-bottom: 24px;

  ${medium} {
    margin-bottom: 40px;
  }
`;

export const titleStyling = css`
  color: ${newColors.primaries.kovBlue};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 24px 0;
`;

export const iconWrapper = css`
  position: absolute;
  top: -8px;
  left: -11.665px;

  ${medium} {
    top: -14.255px;
  }
`;

export const iconWrapperReport = css`
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const iconColor = css`
  fill: ${newColors.primaries.fullBlue};
`;

export const removeMargin = css`
  margin-top: 0 !important;
`;
