import { css } from '@emotion/react';
import {
  newColors,
  spacing,
  medium,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyle = css`
  display: block;
  border: 1px solid ${newColors.shades.fullBlue};
  background-color: ${newColors.kovWhite};
  border-radius: ${spacing.s} ${spacing.s} ${spacing.s} ${spacing.s};
  box-shadow: 0px 3px 10px 3px rgba(22, 34, 89, 0.07);

  @media (prefers-color-scheme: dark) {
    background-color: ${newColors.kovBlack};
    border: 1px solid ${newColors.shades.mediumBlue};
  }
`;

export const wrapperExpandedStyle = css`
  box-shadow: none;
  border: 1px solid transparent;
`;

export const innerWrapperStyle = css`
  position: relative;
`;

export const itemsWrapperStyle = css`
  display: none;
`;

export const itemsWrapperExpandedStyle = css`
  display: block;
  position: absolute;
  top: -1px;
  right: -1px;
  left: -1px;
  width: calc(100% + 2px);
  padding: 56px ${spacing.s} ${spacing.s} ${spacing.s};
  box-shadow: 0px 3px 10px 3px rgba(22, 34, 89, 0.07);
  background-color: ${newColors.kovWhite};
  border-radius: ${spacing.s} ${spacing.s} ${spacing.s} ${spacing.s};
  border: 1px solid ${newColors.shades.fullBlue};
  z-index: 1;

  @media (prefers-color-scheme: dark) {
    background-color: ${newColors.kovBlack};
    border: 1px solid ${newColors.shades.mediumBlue};
  }
`;

export const buttonStyle = css`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  line-height: 1.3333333;
  font-size: 1.6rem;
  gap: ${spacing.s};
  color: ${newColors.shades.fullBlue};
  padding: ${spacing.s} ${spacing.m};
  background-color: transparent;
  border: none;
  margin: 0;
  cursor: pointer;

  ${medium} {
    font-size: 1.8rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${newColors.shades.mediumBlue};
  }
`;

export const chevronStyle = css`
  fill: ${newColors.shades.fullBlue};
  transform: rotate(90deg);

  @media (prefers-color-scheme: dark) {
    fill: #fff;
  }
  @media (prefers-color-scheme: light) {
    fill: ${newColors.shades.fullBlue};
  }
`;

export const chevronExpandedStyle = css`
  transform: rotate(-90deg);
`;

export const maxHeightStyle = css`
  max-height: 450px;
  overflow: scroll;
`;

export const itemsListStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid ${newColors.shades.mediumBlue};

  li {
    border-bottom: 1px solid ${newColors.shades.lightBlue};
    display: block;
    margin: 0;

    &:hover {
      background-color: ${newColors.shades.lightBlue};
    }

    &:active {
      background-color: ${newColors.shades.mediumBlue50};
    }

    &:first-of-type {
      margin-top: ${spacing.s};
    }

    &:focus {
      outline-offset: -4px !important;
    }

    @media (prefers-color-scheme: dark) {
      border-bottom: 1px solid ${newColors.shades.kovBlue50};
      &:hover {
        background-color: ${newColors.shades.kovBlue75};
      }
      &:active {
        background-color: ${newColors.shades.kovBlue75};
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    border-top: 1px solid ${newColors.shades.kovBlue50};
  }
`;

export const itemLinkStyle = css`
  display: block;
  padding: 1.2rem 7px;
  color: ${newColors.shades.fullBlue};
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    text-decoration: underline;
  }

  @media (prefers-color-scheme: dark) {
    color: ${newColors.shades.mediumBlue};
  }
`;

export const itemTextStyle = css`
  display: block;
  padding: 1.2rem 7px;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 0;
  margin-top: 0;

  @media (prefers-color-scheme: dark) {
    color: ${newColors.shades.mediumBlue};
  }
`;

export const itemOptionWrapperStyle = css`
  display: flex;
  padding: 0 ${spacing.xs};
`;

export const applyFiltersBoxStyle = css`
  padding-top: 16px;
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;

  > :first-of-type svg {
    width: 24px;
    max-width: 24px;
    height: 24px;
  }

  > :last-of-type {
    margin-bottom: 0;
  }
`;

export const resetFilterStyle = css`
  ${typography.clickSmall};
  border-radius: 16px;
  color: ${newColors.primaries.fullBlue};
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 8px 16px 8px 42px; //16px + 18px + 8px

  svg {
    position: absolute;
    top: calc(50% - 1px);
    left: 8px;
    transform: translateY(-50%);
    width: 1.8rem;
    height: 1.8rem;
    fill: currentColor;

    ${medium} {
      left: 16px;
    }
  }

  &:hover {
    background-color: ${newColors.shades.lightBlue};
  }
  &:active {
    background-color: ${newColors.shades.mediumBlue50};
  }

  &:hover,
  &:focus,
  &:active,
  &:visited {
    color: ${newColors.primaries.fullBlue};
    svg {
      fill: ${newColors.primaries.fullBlue};
    }
  }

  &:visited {
    color: ${newColors.primaries.fullBlue};
    svg {
      fill: ${newColors.primaries.fullBlue};
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      color: ${newColors.shades.fullBlue};
    }
    &:active {
      color: ${newColors.shades.fullBlue};
    }
  }
`;
