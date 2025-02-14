import { css } from '@emotion/core'
import { newColors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyle = css`
    display: block;
    border: 1px solid ${newColors.shades.fullBlue};
    background-color: ${newColors.kovWhite};
    border-radius: ${spacing.s} ${spacing.s} ${spacing.s} ${spacing.s};
    box-shadow: 0px 3px 10px 3px rgba(22, 34, 89, 0.07);
`

export const wrapperExpandedStyle = css`
    box-shadow: none;
    border: 1px solid transparent;
`

export const innerWrapperStyle = css`
    position: relative;
`

export const itemsWrapperStyle = css`
    display: none;
`;

export const itemsWrapperExpandedStyle = css`
    display: block;
    position: absolute;
    top: -1px;
    right: -1px;
    left: -1px;
    width: calc(100% + 2px);
    padding: 56px ${spacing.s} ${spacing.s} ${spacing.s};
    box-shadow: 0px 3px 10px 3px rgba(22, 34, 89, 0.07);
    background-color: ${newColors.kovWhite};
    border-radius: ${spacing.s} ${spacing.s} ${spacing.s} ${spacing.s};
    border: 1px solid ${newColors.shades.fullBlue};
    z-index: 1;
`;

export const buttonStyle = css`
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    line-height: 1.3333333;
    font-size: 1.6rem;
    gap: ${spacing.s};
    color: ${newColors.shades.fullBlue};
    padding: ${spacing.s} ${spacing.m};
    background-color: transparent;
    border: none;
    margin: 0;
    cursor: pointer;

    ${medium} {
        font-size: 1.8rem;
    }
`;

export const chevronStyle = css`
    fill: ${newColors.shades.fullBlue};
    transform: rotate(90deg);
`;

export const chevronExpandedStyle = css`
    transform: rotate(-90deg);
`;

export const itemsListStyle = css`
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid ${newColors.shades.mediumBlue};

    li {
        border-bottom: 1px solid ${newColors.shades.lightBlue};
        display: block;
        margin: 0;

        &:hover {
            background-color: ${newColors.shades.lightBlue};
        }

        &:active {
            background-color: ${newColors.shades.mediumBlue50};
        }

        &:first-of-type {
            margin-top: ${spacing.s};
        }
    }
`;

export const itemLinkStyle = css`
    display: block;
    padding: 1.2rem ${spacing.xs};
    color: ${newColors.shades.fullBlue};
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
        text-decoration: underline;
    }
`;

export const itemOptionWrapperStyle = css`
    display: flex;
    padding: 0 ${spacing.xs};
`;
