/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

const disabled = css` 
    background-color: ${colors.theme3.xLight};
    text-decoration:none;
    box-shadow:inset 0px 0px 0px 1px ${colors.theme3.midLight};
    cursor:inherit;
    &::placeholder {
        color: ${colors.theme3.midLight};
    }
`;

export const searchWrapperStyle = css`
    position:relative;
    display:flex;
    flex-direction: row;
    align-items: stretch;
    background-color: ${colors.common.white};
    margin-right:.8rem;
    border-radius:.8rem;
`;

export const searchFieldInputWrapperStyles = css`
    display:flex;
    flex-grow:1;
    position: relative;
`

export const searchFieldInputStyle = css`
    -webkit-appearance: none;
    background-color: ${colors.common.white};
    border-radius: .8rem 0 0 .8rem;
    border:none;
    font-size:1.6rem;
    line-height:2rem;
    display:flex;
    flex-grow:1;
    padding: ${spacing.xs} 4.5rem ${spacing.xs} ${spacing.s};
    color: ${colors.theme1.xDark};
    border: 2px solid #fff;
    font-style: normal;
    font-weight: 500;
    box-sizing: border-box;
    width: 100%; 
    height: 100%;

    &::-webkit-search-cancel-button{
        appearance: none;
    }

    ${medium}{
        font-size:1.8rem;
        line-height:3.2rem;
        padding: 1.2rem 6.4rem 1.2rem 1.6rem;
    }

    &:hover {
        border: 2px solid ${colors.theme1.mid};
    }
    &:active {
        border: 2px solid ${colors.theme1.xDark};
    }
    &::placeholder {
        font-style:italic;
        color: ${colors.theme3.midDark};
    }
    &:disabled{
        ${disabled}
    }
`;

export const searchFieldButtonStyle = css`
    white-space: nowrap;
    width:auto;
    align-items: center;
    border-radius: 0 .8rem .8rem 0;
    margin-right:-.8rem;
    padding: .8rem 1.6rem;
    vertical-align: text-top;
`;

export const invertedBackgroundStyle = css`
    box-shadow:none;
    &:hover, &:active {
        box-shadow:none;
    }
`;

export const clearInputStyle = css`

    appearance: none;
    position: absolute;
    right: 0px;
    border: 0px;
    background-color: transparent;
    top: 0.55rem;
    width: 2.8rem;
    height: 2.8rem;
    padding: 0;
    right: 1.6rem;
    svg{
        fill: ${colors.theme1.mid};
        width: 2.8rem;
        height: 2.8rem;
    }
    &:focus{
        outline: none;
    }

    ${medium} {
        top: 1.6rem;
        right: 1.6rem;
    }

`

export const labelStyle = css`
    font-size: 1.8rem;
    line-height: 3.2rem;
    margin-bottom: 0.8rem;
    display: block;
`