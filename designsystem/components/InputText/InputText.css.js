import css from "@emotion/css";
import { colors } from '../Colors/Colors';

export const InputStyle = (hasInnerContent) => css`
    width: 100%;
    padding: 1.2rem ${hasInnerContent ? '4.5rem' : '1.6rem'} 1.2rem 1.6rem;
    border: 2px solid ${colors.theme3.midLight};
    border-radius: 0.8rem;
    font-size: 1.8rem;
    line-height: 3rem;
    height: 5.4rem;
    box-sizing: border-box;
    -webkit-appearance: none;

    &:focus{
        outline: none;
        border-color: ${colors.theme1.mid}
    }

    &::placeholder, &::-webkit-input-placeholder {
        font-style: italic;
        color: ${colors.theme3.mid};
    }
    &::-ms-clear{
        display:none;
        width: 0;
        height: 0; 
    }
    &::-webkit-search-cancel-button{
        appearance: none;   
    }
`
export const invalidStyle = css`
    input {
        border-color: #F00;
    }
`
export const InputWrapperStyle = css`
    position: relative;

`

export const ClearInput = css` 
    appearance: none;
    position: absolute;
    right: 1.6rem;
    border: 0px;
    background-color: transparent;
    bottom: 1.4rem;
    width: 2.8rem;
    height: 2.8rem;
    padding: 0;
    svg{
        fill: ${colors.theme1.mid};
        width: 2.8rem;
        height: 2.8rem;
    }
    &:focus{
        outline: none;
    }
    
`
export const LoadingStyle = css`

    position: absolute;
    right: 2.4rem;
    bottom: 2.2rem;

`
export const Label = css`
  color: #4D4D4D;
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin-bottom: .8rem;
  display: block;
`