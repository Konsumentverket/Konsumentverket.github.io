import { css } from '@emotion/core';
import { newColors, breakpoints, typography } from '@konsumentverket-sverige/designsystem.utils';

export const listItemSlim = css`
  list-style: none;
  border-top: 1px solid ${newColors.shades.mediumBlue50};
  margin: 0;
`;

export const disabled = css`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 16px 8px;
   color: ${newColors.shades.fullGrey};

  @media (min-width: ${breakpoints.m}) {
    padding: 24px 16px;
  }
`;

export const preamble = css`
  ${typography.textSmall};
  color: ${newColors.shades.kovBlack50};
  margin-top: 8px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const link = css`
  ${typography.clickMedium};
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px;
  color: ${newColors.shades.fullBlue};

  @media (min-width: ${breakpoints.m}) {
    padding: 24px 16px;
    justify-content: flex-start;
  }

  &:focus,
  &:hover {
    background: ${newColors.shades.lightBlue};
    text-decoration: underline;
  }
`;

export const headline = css`
  margin-right: 8px;
`;

export const headlineDisabled = css`
  ${typography.clickMedium};
  color: ${newColors.shades.fullGrey};
  text-decoration: none;
  padding-bottom: 0;
  margin-bottom: 0;

  &:hover {
    text-decoration: none;
  }
`;

export const chevronStyle = css`
  fill: ${newColors.shades.fullBlue};
  height: 18px;
  width: 18px;
  min-width: 18px;
`;
