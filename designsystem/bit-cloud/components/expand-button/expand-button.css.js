import { css } from '@emotion/core';
import { newColors, spacing } from '@konsumentverket-sverige/designsystem.utils';

export const expandButtonStyle = css`
    font-size:1.6rem;
    line-height: 1.5;
    font-weight: 400;
    border: none;
    padding: 8px 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    color: ${newColors.primaries.fullBlue};
    border-radius: 4px;
    width: 100%;
    cursor:pointer;
    background-color: transparent;

    span {
        margin-right: ${spacing.xs};
    }

    &:hover {
        background-color:${newColors.primaries.lightBlue};
    }

    &:active{
        background-color:${newColors.shades.mediumBlue50};
    }

    &:disabled {
        color: ${newColors.shades.fullGrey50};
        pointer-events: none;
    }
`;

export const iconStyle = css`
    transform: rotate(0deg);
    fill: ${newColors.primaries.fullBlue};
`;

export const disabledIconStyle = css`
    fill: ${newColors.shades.fullGrey50} !important;
`;

export const expandedIconStyle = css`
    transform: rotate(180deg);
`;