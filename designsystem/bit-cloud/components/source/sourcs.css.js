import {css} from "@emotion/core";
import {newColors, spacing, typography, breakpoints} from '@konsumentverket-sverige/designsystem.utils';

export const sourceWrapperStyle = css`
  margin-bottom: 24px;
`;

export const bottomBorderStyle = css`
  padding-bottom: 24px;
  border-bottom: 1px solid ${newColors.shades.mediumBlue};
`;

export const topWrapperStyle = css`
  display: flex;
  flex-direction: column;
  ${typography.textSmall};

  @media (min-width: ${breakpoints.m}) {
    flex-direction: row;
  }
`;

export const sourceItemsContainer = css`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  row-gap: 8px;
`;

export const rightAlign = css`
  margin-top: ${spacing.xs};

  @media (min-width: ${breakpoints.m}) {
    margin-top: 0;
    display: inline-block;
    flex-grow: 1;
    text-align: right;
  }
`;

export const reviewText = css`
  ${typography.textSmall};
  font-size: 1.4rem;
  margin-bottom: 0;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
    color: ${newColors.shades.kovBlack50};
  }
`;

export const sourceTitle = css`
  margin-right: 8px;
  ${typography.textSmall};
  font-size: 1.4rem;
  color: ${newColors.kovBlack};

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
    color: ${newColors.shades.kovBlack50};
  }
`;

export const sourceLink = css`
  ${typography.linkSmall};
  position: relative;
  & {
    margin: 0 8px 0 9px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -9px;
    width: 1px;
    height: 16px;
    transform: translateY(-50%);
    background: ${newColors.shades.fullGrey};
  }

  &:first-of-type {
    margin-left: 0;

    &::after {
      display: none;
    }
  }

  svg {
    position: relative;
    top: 1px;
    left: 8px;
  }
`

export const bottomTextStyle = css`
  max-width: 748px;
  ${typography.textSmall};
  color: ${newColors.shades.kovBlack50};
  margin-top: 16px;
  margin-bottom: 0;
`;
