import { css } from '@emotion/core'
import { colors, medium } from '@konsumentverket-sverige/designsystem.utils';

export const focusWrapper = css`
  min-height: 25.6rem;
  display:flex;
  /* height: calc(100% - .8rem); */
  height: 100%;
  width:100%;
  flex-direction:column;
  background-color: ${colors.theme2.light};
`

export const linkWrapper = css`
  text-decoration:none;
  display:flex;
  border-radius: .8rem;
  overflow: hidden;

  &:hover .focusWrapper {
      background-color: #E6C3D1;
  }
  &:hover {
    box-shadow: 0px 0px 0px 2px ${colors.theme2.mid};
  }
  &:active {
    box-shadow: 0px 0px 0px 2px ${colors.theme1.xDark};
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
  .image {
    max-width: 100%;
    max-height: 100%;
    transition: .1s all;
  }
  &:hover .image {
    filter: brightness(75%);
  }

  ${medium} {
    height:100%
  }

`

export const focusHeadline = css`
  color: ${colors.theme2.mid};
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0 0 .8rem 0;
  font-weight:700;
`

export const focusText = css`
  color: ${colors.theme3.dark};
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin:0;
  padding:0;
`

export const textArea = css`
  margin:1.6rem 2.4rem 2.4rem 2.4rem;
  ${medium} {
      max-width:32.8rem;
  }
`

export const pictureWrapper = css`
  width:100%;
  min-height:11.2rem;
  position: relative;

  picture {
    display:block;
    width:100%;
    min-height:5rem;
  }
  img {
    display:block;
    width:100%;
    height:auto;
  }
`

export const iconBackground = css`
  background-color: ${colors.theme2.mid};
  padding-top:36.84%;
  position:relative;
`

export const externalIcon = css`
  position: relative;
  margin-left: 0.4rem;
  fill: ${colors.theme2.mid};
`

export const puffIcon = css`
  position:absolute;
  fill: #fff;
  width:6.4rem;
  height:6.4rem;
  left: calc(50% - 3.2rem);
  top: calc(50% - 3.2rem);
`;
