import { css } from '@emotion/core'
import { colors, medium, large } from '@konsumentverket-sverige/designsystem.utils';


export const focusWrapper = css`
  min-height: 25.6rem;
  display:flex;
  height:100%;
  width:100%;
  flex-direction:column;
  background-color: #fff;
  border-bottom-right-radius:.8rem;
  border-bottom-left-radius:.8rem;
  ${medium}{
    flex-direction:row;
    /* margin-top:-.8rem; */
    margin-left:.8rem;
    border-top-right-radius:.8rem;
  }
`

export const linkWrapper = css`
  text-decoration:none;
  display:flex;
  flex-shrink: 0;

  &:hover .textarea {
    background-color: ${colors.theme1.light};
    border-radius: 8px;
  }
  &:hover {
    box-shadow: 0px 0px 0px 2px ${colors.theme1.mid}; 
    border-radius: 8px;
  }
  &:active {
    box-shadow: 0px 0px 0px 2px ${colors.theme1.xDark};
    border-radius: 8px;
  }
  &:active h3 {
    color: ${colors.theme1.xDark};      
  }
  &:active h3 > svg {
    fill: ${colors.theme1.xDark};
  }

  &:hover h3, &:active h3 {
    text-decoration:underline;
  }
  /* .image {
    max-width: 100%;
    max-height: 100%;
    transition: .1s all;
  }
  &:hover .image {
    filter: brightness(75%);
  } */
  ${medium} {
    height: calc(100% + .8rem);
  }

`

export const focusHeadline = css`
  color: ${colors.theme1.mid};
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0 0 .8rem 0;
  font-weight:700;
`

export const focusText = css`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin:0;
  padding:0;
  color:${colors.theme3.dark};
`

export const textArea = css`
  padding:1.6rem 2.4rem 2.4rem 2.4rem;
  box-sizing:border-box;
  ${medium} {   
      max-width:50.89%;  
      display:flex;
      justify-content:center;
      flex-direction:column;
      width:100%;
  }
  ${large} {   
      max-width:32.8rem;
      
  }
`

export const pictureWrapper = css`
  width:100%;
  min-height:11.2rem;

  picture {
    display:block;
    width:100%;
    height:100%;
    min-height:5rem;
  }
  img {
    display:block;
    width:100%;
    height:100%;
    /* height:auto; */
    border-top-right-radius: .8rem;
    border-top-left-radius:.8rem;
  }

  ${medium}{
    max-width:49.11%;
    margin-top:0;
    margin-left:-.8rem;
    img {
      border-top-right-radius: 0;
      border-bottom-left-radius:.8rem;
    }
  }

  ${large}{
    max-width:30.4rem;
  }
`

export const iconBackground = css`
  border-top-right-radius:.8rem;
  border-top-left-radius:.8rem;
  border-bottom-right-radius:0;
  background-color: ${colors.theme2.mid};
  position:relative;
  padding-top:36.84%;

  ${medium}{
    height:100%;
    padding-top:0;
    border-top-right-radius:0;
    border-bottom-left-radius: .8rem;
    border-bottom-right-radius:0;
  }
`


export const externalIcon = css`
  position: relative;
  margin-left: 0.8rem;
  fill: ${colors.theme1.mid};
  width:2rem;
`

export const puffIcon = css`
  position:absolute;
  fill: #fff;
  width:6.4rem;
  height:6.4rem;
  left:calc(50% - 3.2rem);
  top:calc(50% - 3.2rem);
`;