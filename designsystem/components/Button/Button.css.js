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
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1.6rem;
    line-height:2.4rem;
    font-weight:500;
    padding: .8rem;
    color: ${colors.common.white};
    border-radius:.8rem;
    width:100%;
    box-sizing: border-box;
    cursor:pointer;
    background-color:${colors.theme1.mid};

    svg {
        fill: ${colors.common.white};
    }

    ${medium}{
        font-size:2.1rem;
        width:fit-content;
        padding:1.6rem 2.4rem;
        justify-content: space-between;
    }

      &:hover, &.selectedButtonStyle {
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

export const secondaryStyle = css`
    background-color:transparent;
    color:${colors.theme1.mid};
    box-shadow:inset 0px 0px 0px 1px ${colors.theme1.mid};

    svg {
        fill:${colors.theme1.mid}; 
    }
    &:hover, &.selectedButtonStyle {
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
    position:relative;
    svg {
        padding-right:.8rem;
        vertical-align: text-top;
     }
     ${medium}{
        svg {
            float:left;
        }
      } 
`

export const buttonIconRight = css`
    position:relative;
    svg {
        padding-left:.8rem;
        vertical-align: text-top;
    } 
    ${medium}{
        svg {
            float: right;
        }
    } 
`

export const iconStyle = css`
    
    fill:${colors.common.white};
    width: 1.6rem;
    height: 1.6rem;
    top: 1.8rem;
    vertical-align: baseline;
    ${medium}{
        width: 2.4rem;
        height: 2.4rem;
    }
`




