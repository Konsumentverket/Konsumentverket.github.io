import { css } from '@emotion/core';
import {
  newColors,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const ctaWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.1);
  overflow: hidden;

  @media (min-width: 650px) {
    min-width: 500px;
    max-width: 960px;
    flex-direction: row-reverse;
    align-items: stretch;
    gap: 24px;
  }

  .button--linkstyle {
    svg {
      fill: ${newColors.shades.fullBlue};
    }
  }

  a:not(.button--linkstyle) {
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;
export const noBoxshadow = css`
  box-shadow: none;
`;

export const whiteBackground = css`
  background: ${newColors.kovWhite};
  border: 1px solid #fff;

  html[data-theme='dark'] & {
    background: ${newColors.kovBlue};
  }
`;

export const blueBackground = css`
  background: ${newColors.shades.lightBlue50};
  border: 1px solid ${newColors.shades.lightBlue50};

  html[data-theme='dark'] & {
    background: ${newColors.kovBlue};
  }
`;

export const greyBackground = css`
  background: ${newColors.shades.lightGrey25};
  border: 1px solid ${newColors.shades.lightGrey25};

  html[data-theme='dark'] & {
    background: ${newColors.kovBlue};
  }
`;

export const focusHeadline = css`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${newColors.kovBlue};
  margin-bottom: 1.6rem;

  @media (min-width: 650px) {
    font-size: 2.8rem;
    line-height: 1.4;
    margin-bottom: 3.2rem;
  }

  html[data-theme='dark'] & {
    color: ${newColors.primaries.lightBlue};
  }
`;

export const focusText = css`
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 16px;

  @media (min-width: 650px) {
    margin-bottom: 3.2rem;
  }
  html[data-theme='dark'] & {
    color: ${newColors.kovWhite};
  }
`;

export const paragraphStyling = css`
  ${typography.paragraph};

  & {
    margin-bottom: 16px;
  }
  html[data-theme='dark'] & {
    color: ${newColors.primaries.lightBlue};
  }
`;

export const textArea = css`
  padding: 24px;

  @media (min-width: 650px) {
    width: 50%;
    padding: 32px;

    .noimage & {
      width: 100%;
    }
  }

  button {
    width: auto;
    padding: 1.6rem 2.4rem;
  }

  a {
    width: fit-content;
    text-decoration: none;
    justify-content: flex-start;
  }
`;

export const smallHeadlineStyle = css`
  ${typography.h3NoMargin};

  & {
    margin-bottom: 16px;
  }
  html[data-theme='dark'] & {
    color: ${newColors.primaries.lightBlue};
  }
`;

export const smallPaddingStyle = css`
  padding: 24px 16px;

  @media (min-width: 650px) {
    padding: 24px;
  }
`;

export const buttonRightStyle = css`
  a {
    width: auto;
    justify-content: center;

    @media (min-width: 650px) {
      width: fit-content;
      margin-left: auto;
    }
  }

  button {
    width: 100%;

    @media (min-width: 650px) {
      width: auto;
      margin-left: auto;
    }
  }
`;

export const pictureWrapper = css`
  overflow: hidden;
  height: 280px;
  position: relative;
  width: 100%;

  .noimage & {
    display: none;
  }

  .hasicon & {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100px;
      height: 100px;
    }
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 650px) {
    width: 50%;
    min-height: 100%;
    height: auto;
  }
`;

export const externalIcon = css``;
