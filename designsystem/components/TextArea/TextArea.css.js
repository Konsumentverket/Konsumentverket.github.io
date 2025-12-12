import css from "@emotion/css";
import { colors } from '../Colors/Colors';

export const TextAreaStyle = css`
    padding: 1.2rem 1.6rem;
    box-sizing: border-box;
    border: 2px solid #d0d0d0;
    font-family: Arial;
    border-radius: 0.8rem;
    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */
    font-size: 1.8rem;
    line-height: 3rem;
    -webkit-appearance: textfield; /* safari fix */
    margin-bottom: 2.4rem;
    max-width: 100%;
    min-width: 100%;

    &:focus{
        outline: none;
        border-color: ${colors.theme1.mid}
    }

    &::-webkit-search-cancel-button{
        appearance: none;
    }
    &::placeholder, &::-webkit-input-placeholder {
        font-style:italic;
        color: ${colors.theme3.mid};
    }
`

export const TextAreaWrapperStyle = css`
    position: relative;

`

export const Label = css`
  color: #4D4D4D;
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin-bottom: .8rem;
  display: block;
`
export const invalidStyle = css`
    textarea {
        border-color: #F00;
    }
`