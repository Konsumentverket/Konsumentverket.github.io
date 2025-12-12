import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'
import { spacing } from '../Spacing/Spacing'

export const wrapper = css`
  width: 100%;
  display: block;
  text-decoration: none;
  font-weight: 500;
  p {
    color: ${colors.theme3.dark};
  }
  p.listItemHeadline {
      color: ${colors.theme1.mid};
  }

  &:hover {
    background-color: ${colors.theme1.midLight};
    p {
      text-decoration: none;
    }
  }
  &:active {
    background-color: ${colors.theme1.midLight};
    .listItemHeadline {
      color: ${colors.theme1.xDark};
    }
    p {
      text-decoration: none;
    }
  }
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
`
export const news = css`
  font-size: 1.4rem;
  padding-bottom: 0.8rem;
  line-height: 2.4rem;
  color: ${colors.theme3.dark};
`

export const disabled = css`
  pointer-events: none;
  cursor: default;
  text-decoration: none !important;
`

export const headlineDisabled = css`
  color: ${colors.theme3.midDark} !important;
  text-decoration: none !important;
`
export const headline = css`
  font-size: ${spacing.m};
  padding-bottom: ${spacing.xs};
  text-decoration: underline;
  font-weight: 700;
  display: block;
  padding-top: .4rem;
`

export const preambleStyle = css`
  padding-bottom: .8rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${colors.theme3.dark};
`
export const bottomText = css`
  color: ${colors.theme3.mid};
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding-bottom: 0;
`

export const invertedLink = css`
  &:hover {
    background-color: ${colors.common.white};
  }
  &:active {
    background-color: ${colors.common.white};
    h3 {
      color: ${colors.theme1.xDark};
    }
  }
`