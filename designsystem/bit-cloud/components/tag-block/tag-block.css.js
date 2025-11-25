import { css } from '@emotion/core';
import { newColors, colors, medium, spacing } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyle = css`
    width: 100%;
    padding: ${spacing.m};
    border-radius: 16px;
    background-color: ${newColors.shades.lightBlue50};
`;

export const wrapperTransparentStyle = css`
    background-color: transparent;
`;

export const headerStyle = css`
    margin-bottom: ${spacing.m};
`;

export const headingLinkStyle = css`
    display: inline-flex;
    align-items: center;
    gap: ${spacing.xs};
    color: ${newColors.shades.kovBlack};
    text-decoration: none;

    &:hover {
        color: ${newColors.primaries.fullBlue};
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;

        svg {
            fill: ${newColors.primaries.fullBlue};
        }
    }
`;

export const headingStyle = css`
    font-size: 2.0rem;
    line-height: 1.4;
    font-weight: 700;
    margin: 0;

    ${medium} {
        font-size: 2.4rem;
      }
`;

export const tagListStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const tagListItemStyle = css`
    margin: 0;
`;

export const noItemsStyle = css`
      font-size: 1.8rem;
      line-height: 1.5;
      margin: 0;
`;