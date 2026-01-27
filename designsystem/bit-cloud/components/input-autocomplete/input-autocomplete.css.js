import { css } from '@emotion/react';
import {
  newColors,
  breakpoints,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const containerStyle = css`
  position: relative;
`;

export const dropdownHasSuggestionsStyle = css`
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.1);
`;

export const inputAndSubmitWrapper = css`
  position: relative;
  display: flex;
`;

export const inputAndDropdownWrapper = css`
  position: relative;
  width: 100%;
`;

export const labelStyle = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const inputStyle = css`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.5;
  background-color: ${newColors.kovWhite};
  color: ${newColors.shades.kovBlack50};
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${newColors.shades.fullGrey};
  outline-offset: -4px;

  &::placeholder {
    color: ${newColors.secondaries.fullGrey};
    font-style: italic;
  }

  &:focus {
    border: 1px solid ${newColors.shades.fullBlue};
  }

  html[data-theme='dark'] & {
    background-color: ${newColors.kovBlack};
    color: ${newColors.kovWhite};
    border: 1px solid ${newColors.shades.mediumBlue};

    &::placeholder {
      color: ${newColors.shades.mediumBlue};
    }
  }
`;

export const inputHeaderSearchStyle = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-color: ${newColors.shades.fullBlue};
`;

export const clearInput = css`
  background: transparent;
  border: none;
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 16px;
  display: flex;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  svg {
    fill: ${newColors.primaries.fullBlue};
  }
  html[data-theme='dark'] & {
    svg {
      fill: ${newColors.shades.mediumBlue};
    }
  }
`;

export const inputHasSuggestionsStyle = css`
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid ${newColors.shades.fullBlue};
`;

export const inputHeaderSearchHasSuggestionsStyle = css`
  border-radius: 8px 0px 0px 0px;
  border-bottom: 1px solid ${newColors.shades.fullBlue};
  border-top: 1px solid ${newColors.shades.fullBlue};
  border-bottom: 1px solid ${newColors.shades.fullBlue};
  border-left: 1px solid ${newColors.shades.fullBlue};
`;

export const dropdownWrapperStyle = css`
  display: none;
  position: absolute;
  width: 100%;
  list-style: none;
  background-color: ${newColors.kovWhite};
  color: ${newColors.shades.kovBlack50};
  border-top: none;
  border-right: 1px solid ${newColors.shades.fullBlue};
  border-bottom: 1px solid ${newColors.shades.fullBlue};
  border-left: 1px solid ${newColors.shades.fullBlue};
  padding: 0;
  border-radius: 0px 0px 8px 8px;
  overflow: hidden;

  html[data-theme='dark'] & {
    background-color: ${newColors.kovBlack};
    color: ${newColors.shades.mediumBlue};
    border-right: 1px solid ${newColors.shades.mediumBlue};
    border-bottom: 1px solid ${newColors.shades.mediumBlue};
    border-left: 1px solid ${newColors.shades.mediumBlue};
  }
`;

export const showDropdownStyle = css`
  display: block;
`;

export const dropdownPositionRelativeStyle = css`
  position: relative;
`;

export const dropdownItemStyle = css`
  margin: 0;
  padding: 0;

  &[aria-selected='true'] {
    background-color: ${newColors.primaries.lightBlue};

    html[data-theme='dark'] & {
      background-color: ${newColors.shades.kovBlue75};
    }
  }
`;

export const dropdownButtonStyle = css`
  position: relative;
  display: block;
  font-size: 1.6rem;
  line-height: 1.5;
  width: 100%;
  padding: 12px 24px;
  text-align: left;
  color: ${newColors.shades.fullBlue};
  font-family: inherit;
  margin: 0;
  background-color: transparent;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: calc(100% - 32px);
    transform: translateX(-50%);
    height: 1px;
    background-color: ${newColors.primaries.lightBlue};
  }

  &:hover {
    background-color: ${newColors.primaries.lightBlue};

    &::after {
      background-color: transparent;
    }
  }

  &:active {
    background-color: ${newColors.shades.mediumBlue50};

    &::after {
      background-color: transparent;
    }
  }
  html[data-theme='dark'] & {
    color: ${newColors.shades.mediumBlue};

    &:hover {
      background-color: ${newColors.shades.kovBlue75};
    }
    &:active {
      background-color: ${newColors.shades.kovBlue75};
    }
  }
`;

export const loadingWrapperStyle = css`
  top: 16px;
  right: 48px;
  position: absolute;
  z-index: 1;
  // background: ${newColors.kovWhite};
`;

export const searchButtonStyle = css`
  background: ${newColors.shades.fullBlue};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  color: ${newColors.kovWhite};
  cursor: pointer;
  line-height: 24px;
  border-top: 1px solid ${newColors.shades.fullBlue};
  border-right: 1px solid ${newColors.shades.fullBlue};
  border-bottom: 1px solid ${newColors.shades.fullBlue};
  border-left: none;
  z-index: 1;
  outline-offset: -4px;

  svg {
    fill: ${newColors.kovWhite};
  }

  @media (min-width: ${breakpoints.m}) {
    padding: 16px 24px;
  }

  &:focus,
  &:hover {
    background: ${newColors.shades.kovBlue50};
  }

  &:active {
    background: ${newColors.shades.kovBlue75};
  }
`;

export const searchButtonTextStyle = css`
  display: none;

  @media (min-width: ${breakpoints.m}) {
    display: inline-block;
    ${typography.clickMedium};
    color: ${newColors.kovWhite};
    margin-right: 12px;

    &:hover {
      text-decoration: none;
    }
  }
`;
