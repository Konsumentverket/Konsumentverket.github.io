
import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';
import { arrowPath } from '../Icons/SystemIcons/Arrow/Arrow';

export const selectStyle = css`
    appearance: none;
    width: 100%;
    padding: 1.2rem 1.6rem;
    box-sizing:border-box;
    border: 2px solid ${colors.theme3.midLight};
    border-radius: 0.8rem;
    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */
    font-size: 1.8rem;
    line-height: 3rem;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><path fill='${encodeURIComponent(colors.theme1.mid)}' d='${arrowPath}' /></svg>");
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: 1.6em auto, 100%;
    &[data-hasvalue="false"]{
        color: ${colors.theme3.dark};    
    }

`;


export const labelStyle = css`
  color: #4D4D4D;
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin-bottom: .8rem;
  display: block;
`

export const selectWrapperStyle = css`
    width: 100%;
`
export const invalidStyle = css`
    select {
        border-color: #F00;
    }
`