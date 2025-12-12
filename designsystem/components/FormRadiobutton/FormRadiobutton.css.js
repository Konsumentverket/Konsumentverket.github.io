import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';

export const wrapperStyle = css` 
    position:relative;
    display:inline-block;

`;

export const labelStyle = css` 
    font-size:2.1rem;
    line-height:3.2rem;
    padding:.8rem .8rem .8rem 5.6rem;
    border-radius:.8rem;
    display:inline-block;
    &:hover {
        background-color:${colors.theme1.light};
        text-decoration:underline;
    }
`;

export const fieldStyle = css`
    position: absolute;
    top:.8rem;
    left:.8rem;
    appearance: none;
    height:3.2rem;
    width:3.2rem;
    border:solid 1px ${colors.theme1.mid};
    border-radius:.2rem;
    background-color:${colors.common.white};
    margin:0;
    border-radius:50%;

    &:checked {
        border-color:${colors.theme1.xDark};
    }
    &:checked::before{
        content: '';
        display: block;
        background-color:${colors.theme1.xDark};
        position: absolute;
        height:2.2rem;
        width:2.2rem;
        left: calc(50% - 1.1rem);
        top: calc(50% - 1.1rem);
        border-radius:50%;
   }
   &:hover + label{
    background-color:${colors.theme1.light};
    text-decoration:underline;
   }
   &:checked + label {
    background-color:${colors.theme1.light};
    color:${colors.theme1.xDark};
    text-decoration:underline;
   }
`;

export const invertedLabelStyle = css`
    &:hover {
        background-color:${colors.common.white};
    }
`;

export const invertedfieldStyle = css`
    &:hover + label {
        background-color:${colors.common.white};
        color: ${colors.theme1.xDark};
    }
    &:checked + label {
        background-color:${colors.common.white};
    }
    
`;


