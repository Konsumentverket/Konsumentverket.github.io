import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';
import { medium } from '../GlobalStyles/globalStyles';

const disabled = css` 
    color: ${colors.theme3.mid};
    background-color: ${colors.theme3.midLight};
    text-decoration:none;
    box-shadow:none;
    cursor:inherit;
    svg {
        fill:${colors.theme3.mid};
    }
`;

export const buttonStyle = css`
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size:1.6rem;
    line-height:2.4rem;
    font-weight:500;
    padding: .8rem 2.4rem;
    color: ${colors.common.white};
    border-radius:.8rem;
    width:100%;
    box-sizing: border-box;
    cursor:pointer;
    background-color:${colors.buttons.primary.backgroundColor};

    svg {
        fill: ${colors.common.white};
        flex-shrink: 0;
    }

    ${medium}{
        font-size:2.1rem;
        line-height:2.4rem;
        width:auto;
        padding:1.6rem 2.4rem;
    }

    &:hover, &.selectedButtonStyle {
        background-color:${colors.buttons.primary.hover};
        text-decoration:underline;
    }
    &:active{
        background-color:${colors.buttons.primary.active};
        text-decoration:underline;
    }
    &:disabled{
        ${disabled}
    }
`;

export const secondaryStyle = css`
    background-color:transparent;
    color:${colors.buttons.secondary.textColor};
    box-shadow:inset 0px 0px 0px 1px ${colors.buttons.secondary.borderColor};

    svg {
        fill: ${colors.buttons.secondary.textColor};
    }
    &:hover, &.selectedButtonStyle {
        background-color:${colors.buttons.secondary.hover};
        text-decoration:underline;
        border-color:${colors.theme1.xDark};
        box-shadow: inset 0 0 0 2px ${colors.buttons.secondary.borderColor};
    }
    &:active {
        color:${colors.common.white};
        background-color:${colors.buttons.secondary.active};
        box-shadow:none;
        svg {
            fill:${colors.common.white}; 
        }
    }
    &:disabled{
        ${disabled}
    }
`;

export const invertedBackgroundStyle = css`
    &:hover, &:active, &.selectedButtonStyle {
        box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    }
    &:active {
        background-color: ${colors.theme1.dark};
    }
`;

export const invertedSecondaryBackgroundStyle = css`
    box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    color: ${colors.common.white};
    svg {
            fill:${colors.common.white}; 
        }
    &:hover, &:active, &.selectedButtonStyle {
        box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    }
    &:hover, &.selectedButtonStyle {
        background-color:${colors.theme1.midDark};
    }
    &:active {
        background-color: ${colors.theme1.dark};
    }
    &:disabled {
        ${disabled}
    }
`;

export const buttonIconLeft = css`
    svg {
        padding-right:.8rem;
     }
`

export const buttonIconRight = css`
    svg {
        padding-left:.8rem;
    }
`

export const iconStyle = css`
    position: relative;
    fill:${colors.common.white};
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: baseline;
    top: 2px;
    ${medium} {
        top: 0;
    }
`




