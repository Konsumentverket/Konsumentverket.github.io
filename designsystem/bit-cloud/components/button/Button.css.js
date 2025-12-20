import { css } from '@emotion/react';
import {
  newColors,
  typography,
  medium,
} from '@konsumentverket-sverige/designsystem.utils';

const disabled = css`
  color: ${newColors.secondaries.fullGrey};
  background-color: ${newColors.secondaries.lightGrey};
  text-decoration: none;
  box-shadow: none;
  cursor: inherit;
  svg {
    fill: ${newColors.secondaries.fullGrey};
  }
`;

export const buttonStyle = css`
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  padding: 1.6rem 2.4rem;
  color: ${newColors.kovWhite};
  border-radius: 1.6rem;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${newColors.primaries.fullBlue};
  box-shadow: 0px 3px 10px 3px rgba(22, 34, 89, 0.07);
  border: 1px solid ${newColors.primaries.fullBlue};

  svg {
    fill: currentColor;
    flex-shrink: 0;
  }

  &:hover,
  &.selectedButtonStyle {
    background-color: ${newColors.shades.kovBlue50};
    text-decoration: underline;
  }

  &:active {
    background-color: ${newColors.shades.kovBlue50};
    text-decoration: underline;
  }

  &:disabled {
    ${disabled}
  }

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.fullBlue};
    color: ${newColors.kovWhite};

    &:hover,
    &.selectedButtonStyle {
      background-color: ${newColors.shades.kovBlue50};
      text-decoration: underline;
    }
  }
`;

export const secondaryStyle = css`
  background-color: ${newColors.primaries.kovWhite};
  color: ${newColors.primaries.fullBlue};

  svg {
    fill: currentColor;
  }

  &:hover,
  &.selectedButtonStyle {
    background-color: ${newColors.shades.lightBlue50};
    text-decoration: underline;
    border-color: ${newColors.primaries.fullBlue};
  }

  &:active,
  &.selectedButtonStyle {
    background-color: ${newColors.shades.lightBlue};
    text-decoration: underline;
    border-color: ${newColors.primaries.fullBlue};
  }
  &:disabled {
    ${disabled}
  }
`;

export const chipsStyle = css`
  ${secondaryStyle};
  box-shadow: none;
  padding: 0.8rem 1.6rem;
  border-radius: 32px;

  && svg {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
`;

export const smallStyle = css`
  padding: 0.8rem 2.4rem;
`;

export const linkStyles = css`
  border: none !important;
  padding: 0;
  background: none;
  text-decoration: underline;
  color: ${newColors.primaries.fullBlue};
  ${typography.linkBodyMedium};
  box-shadow: none;
  background-color: transparent !important;

  svg {
    fill: ${newColors.kovBlack};
  }

  html[data-theme='dark'] & {
    color: ${newColors.shades.mediumBlue};
    svg {
      fill: ${newColors.shades.mediumBlue};
    }
  }

  &:hover {
    background: none;
  }
`;

export const linkStylesSmall = css`
  ${linkStyles};
  font-size: 1.6rem !important;
  padding-right: 8px;

  svg {
    max-width: 1.8rem !important;
    height: auto;
    margin-left: 0.8rem !important;
    margin-right: 0.8rem !important;
  }
`;

export const buttonIconLeft = css`
  display: flex;
  justify-content: center;
  align-items: center;

  [data-comp='link-card'] & {
    text-align: left;
    align-items: baseline;

    svg {
      transform: translateY(2px);
    }
  }

  svg {
    max-width: 2.4rem;
    height: auto;
    margin-right: 1.6rem;
  }
`;

export const buttonIconRight = css`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 1.8rem;
    height: auto;
    margin-left: 1.6rem;
  }
`;

export const buttonIconOnly = css`
  svg {
    margin: 0 !important;
  }
`;

export const cookieStyle = css`
  text-decoration: none;
  line-height: 2.4rem;
  padding: 1.6rem 2.4rem;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0px 3px 10px 3px rgba(22, 34, 89, 0.07);
  background-color: #ffffff;
  color: #161616;
  font-weight: 500;
  font-size: 1.6rem;
  height: 5.6rem;
  border-radius: 16px;
  display: inline-flex;
  margin-bottom: 2.4rem;
  text-align: center;
  width: fit-content !important;
  border: 1px solid #fff;

  img {
    height: 100%;
    width: 24px;
    margin-right: 16px;
    vertical-align: middle;
  }

  svg {
    margin-right: 1.6rem;
  }

  align-items: center;

  &:focus {
    box-shadow: 0 0 0 3px #00944b;
  }

  &:hover {
    background-color: #edebeb;
    box-shadow: 0px 0px 0px 2px #161616;
    outline: none;
    text-decoration: underline;
  }

  &:active {
    color: ${newColors.shades.fullBlue} !important;
    outline: none;
    background-color: ${newColors.shades.lightBlue};
    text-decoration: underline;
  }

  &:disabled {
    background-color: #d0d0d0;
  }

  ${medium} {
    margin-bottom: 1.6rem;
    text-align: center;
    display: flex;
  }

  svg {
    fill: currentColor;
    flex-shrink: 0;
  }
`;
