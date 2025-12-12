import { css } from '@emotion/core'

import { medium } from '../GlobalStyles/globalStyles'

import { colors } from '../Colors/Colors'



export const wrapper = css`

  position: relative;

  background-color: ${colors.theme1.light};

  border-radius: 0.7rem;

  padding: 4rem 1.6rem 2.4rem 1.6rem;

  margin-top: 2rem;

  ${medium} {

    padding: 2.4rem 3.2rem 2.4rem 3.2rem;

    margin-top: .8rem;

    margin-left: .8rem;

  }

  [dir="rtl"] &{

    ${medium} {

      margin-left: .0rem;

      margin-right: .8rem;

    }

  }

`



export const exclamationMarkImage = css`

  position: absolute;

  top: -2rem;

  left: 50%;

  width:4rem;

  height:4rem;

  transform: translate(-50%, 0);

  ${medium} {

    left: 1.2rem;

    top:-.8rem; 

  }



  [dir="rtl"] &{

    ${medium} {

      left: auto;

      right: -3.2rem; 

    }

  }



`



export const heading = css`

  color: #000;

`

