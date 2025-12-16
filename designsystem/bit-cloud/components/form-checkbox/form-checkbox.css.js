import { css } from '@emotion/core';
import { colors, newColors } from '@konsumentverket-sverige/designsystem.utils';
import checkmarkSvg from './checkmark.svg';
import checkmarkDarkSvg from './checkmark-dark.svg';

export const wrapperStyle = css`
  position: relative;
  display: flex;
  width: 100%;
`;

export const labelStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.2rem 7px;
    color: ${newColors.shades.kovBlack};
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    text-decoration: none;
    position: relative;

    &:hover .underline {
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
        text-decoration: underline;
      }
    }
    @media (prefers-color-scheme: dark) {
      color: ${newColors.kovWhite};
    }
`;

export const checkboxStyle = css`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox + .checkbox-label:before {
    content: '';
    flex-shrink: 0;
    background: #fff;
    border-radius: 2px;
    border: 1px solid ${newColors.shades.fullBlue};
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 1.6rem;
    box-shadow: 2px 2px 5px 0px rgba(22, 34, 89, 0.1) inset;
    border-radius: 4px;
    color: ${newColors.shades.fullBlue};

    @media (prefers-color-scheme: dark) {
      border: 1px solid ${newColors.shades.mediumBlue};
      background: ${newColors.kovBlack};
    }
  }

  .checkbox {
    &:checked + .checkbox-label:before {
      background: ${newColors.shades.kovWhite};
      border: 1px solid ${newColors.shades.fullBlue};
    }
  }

  .checkbox:focus-visible + .checkbox-label {
    outline: ${colors.states.focus} solid 2px;
    outline-offset: 2px;
    box-shadow: none;
  }

  .checkbox:checked + .checkbox-label:before {
    background-image: url(${checkmarkSvg});
    background-repeat: no-repeat;
    background-size: 48px 48px;
    background-position: px 0px;
    position: relative;

    @media (prefers-color-scheme: dark) {
      background-image: url(${checkmarkDarkSvg});
    }
  }

  .checkbox[disabled],
  .checkbox[disabled] + .checkbox-label {
    pointer-events: none;
  }

  .checkbox[disabled] + .checkbox-label {
    color: ${newColors.shades.fullGrey};
  }

  .checkbox[disabled] + .checkbox-label:before {
    border: 1px solid ${newColors.shades.mediumGrey};
    background-color: ${newColors.shades.lightGrey25};
    box-shadow: none;
  }
`;

export const labelPrimaryStyle = css`
  color: ${newColors.shades.fullBlue};

  @media (prefers-color-scheme: dark) {
    color: ${newColors.shades.mediumBlue};
  }
`;

export const statsStyle = css`
  margin-left: auto;
`;
