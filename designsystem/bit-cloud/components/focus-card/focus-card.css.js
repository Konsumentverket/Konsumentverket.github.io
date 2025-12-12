import { css } from '@emotion/react';
import {
  spacing,
  newColors,
  breakpoints,
  containerStyles,
  medium,
} from '@konsumentverket-sverige/designsystem.utils';

export const focusCardStyle = css`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 20px 0px rgba(22, 34, 89, 0.1);
  padding: ${spacing.m};
  background-color: ${newColors.kovWhite};
  border-radius: ${spacing.s};
  text-decoration: none;
  border: 1px solid transparent;
  // transition: background-color 0.15s ease, border 0.15s ease;

  &:hover,
  &:focus {
    background-color: ${newColors.shades.lightBlue};
    border: 1px solid ${newColors.shades.fullBlue};
  }

  &:active {
    background-color: ${newColors.shades.mediumBlue50};
    border: 1px solid ${newColors.shades.fullBlue};
  }

  &:hover .focusCardIconSection,
  &:focus .focusCardIconSection {
    background-color: ${newColors.shades.mediumBlue50};
  }

  &:active .focusCardIconSection {
    background-color: ${newColors.shades.lightBlue};
  }

  &:hover .focusCardIconSection::after,
  &:focus .focusCardIconSection::after,
  &:active .focusCardIconSection::after {
    background-color: transparent;
  }

  &:hover .focusCardTitle,
  &:focus .focusCardTitle,
  &:active .focusCardTitle {
    text-decoration-color: currentColor;
  }

  @media (prefers-color-scheme: dark) & {
    background-color: ${newColors.shades.kovBlue};
    border: 1px solid ${newColors.shades.kovBlue};

    &:hover,
    &:focus {
      background-color: ${newColors.shades.kovBlue75};
      border: 1px solid ${newColors.shades.mediumBlue};
    }

    &:hover .focusCardIconSection,
    &:focus .focusCardIconSection {
      background-color: ${newColors.shades.fullBlue};
    }

    &:active .focusCardIconSection {
      background-color: ${newColors.shades.fullBlue};
    }
  }
`;

export const focusCardDarkStyle = css`
  background-color: ${newColors.shades.lightBlue50};
  border: 1px solid ${newColors.shades.mediumBlue};

  .focusCardIconSection {
    background-color: ${newColors.shades.mediumBlue50};
  }
`;

export const focusCardTextSectionStyle = css`
  width: calc(100% - (92px + 20px));
`;

export const focusCardTitleStyle = css`
  color: ${newColors.primaries.fullBlue};
  font-size: 2rem;
  margin: 0 0 ${spacing.s} 0;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
  text-decoration-color: transparent;
  // transition: text-decoration-color 0.15s ease;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    margin: 0 0 ${spacing.s} 0;
  }

  @media (prefers-color-scheme: dark) & {
    color: ${newColors.shades.mediumBlue};
  }
`;

export const focusCardTextStyle = css`
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${newColors.kovBlack};
  padding: 0;
  margin-bottom: 0;

  @media (prefers-color-scheme: dark) & {
    color: ${newColors.kovWhite};
  }
`;

export const focusCardIconSectionStyle = css`
  width: 84px;
  position: absolute;
  top: 50%;
  right: -42px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 37px 0;
  border-radius: 200px 0px 0 200px;
  background-color: ${newColors.shades.lightBlue};
  // transition: background-color 0.15s ease;

  @media (prefers-color-scheme: dark) & {
    background-color: ${newColors.shades.fullBlue};
  }
`;

export const focusCardIconDarkSectionStyle = css`
  &::after {
    content: '';
    height: 100%;
    width: 1px;
    background-color: ${newColors.shades.lightBlue};
    position: absolute;
    right: -1px;
    top: 0;
    // transition: background-color 0.15s ease;
    @media (prefers-color-scheme: dark) & {
      background-color: ${newColors.primaries.fullBlue};
  }
`;

export const focusCardChevronIconStyle = css`
  fill: ${newColors.primaries.fullBlue};

  @media (min-width: ${breakpoints.m}) {
    margin-left: ${spacing.m};
  }

  @media (prefers-color-scheme: dark) & {
    fill: ${newColors.primaries.mediumBlue};
  }
`;
