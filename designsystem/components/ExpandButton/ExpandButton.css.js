import { css } from '@emotion/core';
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

export const expandButtonStyle = css`
    font-size:1.6rem;
    line-height:2.4rem;
    font-weight:500;
    padding:.8rem;
    display:flex;
    justify-content: center;
    align-items: center;
    
    color: ${colors.common.white};
    border-radius:3.2rem;
    width:100%;
    cursor:pointer;
    background-color:${colors.theme1.mid};

    span{
        padding-right: .8rem;
    }
    svg {
        fill: ${colors.common.white};
    }

    ${medium}{
        /*width:auto;*/
        font-size:2.1rem;
        padding:1.6rem 2.4rem;
    }

    &:hover {
        background-color:${colors.theme1.midDark};
        text-decoration:underline;
    }
    &:active{
        background-color:${colors.theme1.xDark};
        text-decoration:underline;
    }
    &:disabled{
        ${disabled}
    }
`;

export const smallStyle = css`

    padding: .8rem .8rem !important;
    font-size: 1.6rem !important;
    span{
        padding-right: .2rem;
    }
    svg{
        top: 1px;
    }
    &[aria-expanded="true"]{
        svg{
            top: -1px;
        }
    }

`

export const secondaryStyle = css`
    background-color:transparent;
    color:${colors.theme1.mid};
    box-shadow:inset 0px 0px 0px 1px ${colors.theme1.mid};

    svg {
        fill:${colors.theme1.mid}; 
    }
    &:hover {
        background-color:${colors.theme1.midLight};
        text-decoration:underline;
        border-color:${colors.theme1.xDark};
    }
    &:active {
        color:${colors.common.white};
        background-color:${colors.theme1.xDark};
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
    &:hover, &:active {
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
    &:hover, &:active {
        box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    }
    &:hover {
        background-color:${colors.theme1.midDark};
    }
    &:active {
        background-color: ${colors.theme1.dark};
    }
    &:disabled {
        ${disabled}
    }
`;

export const iconStyle = css`
    width:2.4rem;
    height:2.4rem;
    position: relative;
    top: 3px;
`;

export const expandedIconStyle = css`
    transform: rotate(180deg);
`;