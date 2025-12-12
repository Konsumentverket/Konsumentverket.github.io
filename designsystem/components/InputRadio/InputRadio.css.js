import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';
import { spacing } from '../Spacing/Spacing';


export const fieldWrapper = css`

    width: 100%;
    position: relative;
    border-radius: 0.8rem;
    border: 2px solid transparent;
    display:flex;
    align-items: center;
    background-color: ${colors.theme3.xLight};
    &.inputHasValue{
        border: 2px solid ${colors.theme1.xDark};
        text-decoration: underline;
        font-weight: bold;
    }

    &:hover{
        border: 2px solid ${colors.theme1.mid};
        .radiolabel {
            text-decoration: underline;
        }
    }
    
    &:focus-within{
        .tabnav &{
            outline-offset: 2px;
            outline: 3px solid ${colors.states.focus};
        }
    }
    

`

export const fieldInput = css`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    vertical-align: middle;
    border-radius: 50%;
    border: 2px solid ${colors.theme1.mid};
    background: #fff;
    margin: 0;
    margin-left: 2.4rem;
    margin-right: 1.6rem;
    flex-shrink: 0;
    
    &:focus{
        outline:none!important;
    }    

    &:checked{
        outline: none;
        border: 4px solid ${colors.theme1.xDark};
        background-color: ${colors.theme1.xDark};
        position: relative;
        
        &+label{ 
            text-decoration: underline;
            font-weight: 500;
            color: ${colors.theme1.xDark};
        } 

        &:before{
            content: "";
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            display:block;
            border: 2px solid #fff;
            background: transparent;
            position: absolute;
            top:-2px;
            left:-2px;
        }

        &:disabled {
            opacity: 1;
        }

    }
    &:disabled {
        opacity: 1;
    }

`

export const fieldLabel = css`
    color: ${colors.theme1.xDark};
    width: 100%;
    font-size: 21px;
    line-height: 28px;
    padding: 18px 0; 
    display: flex;
    user-select: none;
    margin-right: ${spacing.m};
`

export const disabledStyle = css`
    color: ${colors.theme3.mid};
    background-color: ${colors.theme3.midLight};
    cursor: inherit;
    box-shadow: none;
    input {
        background-color: ${colors.theme3.light};
        border-color: ${colors.theme3.mid};
    }
    &:hover {
        border: 2px solid transparent;
        text-decoration: none;
    }
    
    &:hover {
        .radiolabel {
            text-decoration: none;
        }
    }
`