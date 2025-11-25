import { css } from '@emotion/core';
import {newColors, breakpoints, colors} from '@konsumentverket-sverige/designsystem.utils';

export const wrapper = css`
  width: 100%;
  display: block;
  text-decoration: none;
  font-weight: 500;
  padding: 16px 8px;
  border-top: 1px solid ${newColors.shades.mediumBlue50};
  font-family: "Roboto";

  @media (min-width: ${breakpoints.m}) {
    padding: 24px 16px;
  }

  p.listItemHeadline {
      color: ${newColors.shades.fullBlue};
  }

  &:hover {
    background-color: ${newColors.shades.lightBlue50};

    p {
      text-decoration: none;
    }

    p.listItemHeadline {
      text-decoration: underline;
    }
  }
  &:active {
    background-color: ${newColors.shades.lightBlue};
    p {
      text-decoration: none;
    }
  }
`

export const disabled = css`
  pointer-events: none;
  cursor: default;
  text-decoration: none !important;
`

export const headline = css`
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.5;
  display: block;
  margin-bottom: 8px;
  color: ${newColors.shades.fullBlue};
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
    line-height: 1.4;
  }

  svg {
    min-width: 18px;
    margin-left: 8px;
    fill: ${newColors.shades.fullBlue};
  }
`

export const preambleStyle = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
`

export const preambleMaxWidth = css`
  max-width: 728px;
`

export const dateWrapper = css`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.m}) {
    align-items: center;
    flex-direction: row;
  }
`

export const typeStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${newColors.shades.kovBlack50};
  padding-right: 16px;
  margin-bottom: 4px;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 0;
  }

  &:after {
    display: none;

    @media (min-width: ${breakpoints.m}) {
      display: block;
      content: '';
      width: 1px;
      height: 16px;
      background-color: ${newColors.shades.kovBlack50};
      margin-left: 16px;
    }
  }
`

export const dateStyle = css`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${newColors.shades.kovBlack50};
  margin-bottom: 0;
`

export const bottomText = css`
  color: ${newColors.shades.kovBlack50};
  font-size: 1.4rem;
  line-height: 2;
  padding-bottom: 0;
  margin-bottom: 0;
`

