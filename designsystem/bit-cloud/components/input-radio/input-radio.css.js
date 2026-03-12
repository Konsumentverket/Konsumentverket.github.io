import { css } from '@emotion/react';
import {
  colors,
  newColors,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const fieldWrapper = css`
  width: 100%;
  position: relative;
  border-radius: 16px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  overflow: hidden;

  &.inputHasValue {
    text-decoration: underline;
    font-weight: bold;
  }

  &:hover {
    border: 1px solid ${newColors.shades.mediumGrey50};
    .radiolabel {
      text-decoration: underline;
    }
  }

  &:focus-within {
    .tabnav & {
      outline-offset: 2px;
      outline: 3px solid ${colors.states.focus};
    }
  }
`;

export const colorThemeBlueWrapper = css`
  border: 1px solid ${newColors.primaries.fullBlue};

  &:hover {
    border: 1px solid ${newColors.primaries.fullBlue};
  }
`;

export const colorThemeWhite = css`
  background-color: ${newColors.primaries.kovWhite};

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.kovBlack};
    border: 1px solid ${newColors.shades.mediumBlue};
    border-radius: 16px;
  }
`;

export const colorThemeBlue = css`
  background-color: ${newColors.primaries.kovWhite};

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.kovBlue};
  }
`;

export const colorThemeGrey = css`
  background-color: ${newColors.shades.lightGrey25};

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.fullGrey};
  }
`;

export const fieldInput = css`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 2.4rem;
  height: 2.4rem;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid ${newColors.primaries.fullBlue};
  background-color: #fff;
  margin: 0;
  margin-left: 2.4rem;
  margin-right: 1.6rem;
  flex-shrink: 0;
  box-shadow: 2px 2px 5px 0px rgba(22, 34, 89, 0.1) inset;

  &:focus {
    outline: none !important;
  }

  &:checked {
    box-shadow: none;
    outline: none;
    border: 1px solid ${newColors.primaries.fullBlue};
    background-color: ${newColors.primaries.kovWhite};
    position: relative;

    & + label {
      text-decoration: underline;
      font-weight: 500;
    }

    &:before {
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      display: block;
      background-color: ${newColors.primaries.fullBlue};
      position: absolute;
      top: 3px;
      left: 3px;

      forced-color-adjust: none;
      -ms-high-contrast-adjust: none;

      html[data-theme='dark'] & {
        background-color: ${newColors.shades.mediumBlue};
      }
    }

    &:disabled {
      opacity: 1;
    }
  }
  &:disabled {
    opacity: 1;
    box-shadow: none;
  }
`;

export const fieldLabel = css`
  font-size: 16px;
  line-height: 1.5;
  color: ${newColors.kovBlack};
  color: ${newColors.primaries.fullBlue};
  width: 100%;
  padding: 16px 24px 16px 0;
  display: flex;
  user-select: none;

  html[data-theme='dark'] & {
    color: ${newColors.shades.mediumBlue};
  }
`;

export const disabledStyle = css`
  box-shadow: none;
  background-color: ${newColors.shades.lightGrey50};
  cursor: inherit;
  box-shadow: none;

  input {
    border: 1px solid ${newColors.shades.mediumGrey};
    background-color: ${newColors.shades.lightGrey25};
  }

  label {
    color: ${newColors.shades.kovBlack50};
  }

  &:hover {
    border: 1px solid transparent;
    text-decoration: none;
  }

  &:hover {
    .radiolabel {
      text-decoration: none;
    }
  }

  html[data-theme='dark'] & {
    background-color: ${newColors.shades.fullGrey};
    label {
      color: ${newColors.shades.kovBlack50};
    }
  }
`;
