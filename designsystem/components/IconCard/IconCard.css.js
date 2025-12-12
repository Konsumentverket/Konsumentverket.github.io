import { css } from '@emotion/core'
import { colors } from '../Colors/Colors.js'
import { spacing } from '../Spacing/Spacing.js';

export const arrowStyle = css`
    flex-shrink: 0;
    transform: rotate(270deg);
    padding-right: .4rem;
    height: 3.2rem;
    width: 3.2rem;
    fill: ${colors.theme1.mid};

    [dir='rtl'] &{
        left: .5rem;
        right: auto;
        transform: rotate(90deg);
    }
`

export const iconStyle = css`
    flex-shrink: 0;
    padding: 0 1.6rem 0 1.2rem;
    height: 3.2rem;
    width: 3.2rem;
    fill: ${colors.theme1.mid};
`;

export const iconCardStyle = css`
    background-color: ${colors.common.white};    
    min-height: 7.2rem;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    height:100%;
    align-items: center;
    border-radius: .8rem;
    border: 1px solid ${colors.theme1.mid};
    &:hover {
        background-color: ${colors.theme1.midLight};
        border-color: ${colors.theme1.mid};
        box-shadow: inset 0 0 0 1px ${colors.theme1.mid};
        span {
            text-decoration:underline;
        }
    }
    &:active 
    {   
        background-color: ${colors.theme1.xDark};
        border-color:${colors.theme1.xDark};
        box-shadow: none;
        span{
            color:#fff;
        }
        svg {
            fill:#fff;
        }
    }
`;

export const iconText = css`
    width:100%;
    color: ${colors.theme1.mid};
    line-height: 2.4rem;
    font-size: 2.1rem;
    font-weight: 500;
    word-wrap:break-word;

    [dir='rtl'] &{
        padding-right: ${spacing.s};
    }
`;
export const noIcon = css`
    padding: .8rem 1.6rem .8rem 1.4rem;
`
export const topAreaIcon = css`
    padding-left: 5.6rem;
`;