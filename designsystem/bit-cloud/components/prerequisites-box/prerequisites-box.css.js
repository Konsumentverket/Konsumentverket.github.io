import {css} from "@emotion/core";
import {newColors, breakpoints, typography} from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyling = css`
  width: 100%;
  background-color: ${newColors.shades.lightGrey25};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.m}) {
    padding: 24px;
    margin-bottom: 40px;
  }

  p {
    ${typography.textSmall};
    color: ${newColors.shades.kovBlack50};

    &:last-of-type {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  a {
    ${typography.linkSmall};
  }
`

export const titleStyling = css`
  ${typography.subHeadingAltMini};
  color: ${newColors.shades.kovBlack50};
  margin-top: 0;
`
