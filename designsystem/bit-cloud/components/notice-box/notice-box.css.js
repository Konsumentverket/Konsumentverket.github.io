import { css } from '@emotion/react';
import {
  newColors,
  spacing,
  medium,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyling = css`
  width: 100%;
  background-color: ${newColors.secondaries.lightGreen};
  border-radius: 16px;
  padding: ${spacing.m} ${spacing.s};
  position: relative;
  margin-top: 24px;

  ${medium} {
    margin-top: 32px;
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
        width: 9px;
        height: 9px;
        display: inline-block;
        border-radius: 50%;
        background-color: ${newColors.secondaries.fullGrey};
      }
    }
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${newColors.secondaries.fullGreen};
    p {
      color: ${newColors.kovWhite};
    }
  }
`;

export const warningWrapperStyling = css`
  background-color: ${newColors.primaries.lightOrange};

  @media (prefers-color-scheme: dark) {
    background-color: ${newColors.primaries.fullOrange};
    color: ${newColors.primaries.lightOrange};
  }
`;

export const tagMargin = css`
  margin-top: 32px; // 24px + 8px

  ${medium} {
    margin-top: 40px; // 32px + 8px
  }
`;

export const articleEntryMarginStyling = css`
  margin-bottom: 32px;

  ${medium} {
    margin-bottom: 40px;
  }
`;

export const titleStyling = css`
  ${typography.h2NoMargin};
  color: ${newColors.primaries.kovBlack};
  & {
    margin-bottom: 16px;

    ${medium} {
      margin-bottom: 32px;
    }
  }
  @media (prefers-color-scheme: dark) {
    color: ${newColors.kovWhite};
  }
`;

export const iconWrapper = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -8px;
  left: -12px;
  background-color: ${newColors.validation.success};
  border-radius: 100vmax;
  width: 32px;
  height: 32px;

  ${medium} {
    top: -14px;
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${newColors.secondaries.lightGreen};
  }
`;

export const iconWrapperWarning = css`
  background-color: none;
`;

export const iconColor = css`
  fill: ${newColors.secondaries.lightGreen};
  width: 20px;

  @media (prefers-color-scheme: dark) {
    fill: ${newColors.secondaries.fullGreen};
  }
`;
