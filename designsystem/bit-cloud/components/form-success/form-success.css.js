import { css } from '@emotion/react';
import {
  newColors,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const wrapper = css`
  margin-bottom: 34px;
`;

export const dataListTitle = css`
  ${typography.subHeadingLarge};
  margin-bottom: 24px;
`;

export const dataList = css`
    margin-bottom: 36px;

    div {
      ${typography.paragraph};
      color: ${newColors.shades.readingBlack};
    }

    dt {
      display: inline-block;
      font-weight: bold;
      margin-right: 8px;
      vertical-align: top;
    }

    dd {
      display: inline-block;
      margin: 0;
      max-width: 640px;
    },
`;

export const nestedContainerTitle = css`
  display: block;
`;

export const nestedWrapper = css`
  display: flex !important;
  flex-direction: column;
`;

export const nestedFlex = css`
  display: flex !important;
  flex-direction: column;
  gap: 16px;
`;

export const nestedFlexChild = css`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  gap: 0;
`;

export const nestedKeyStyle = css`
  font-weight: bold;
  margin-right: 8px;
`;

export const loader = css`
  margin: 0 0 24px;
`;
