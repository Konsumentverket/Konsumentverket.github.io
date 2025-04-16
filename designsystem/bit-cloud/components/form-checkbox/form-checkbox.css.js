import { css } from '@emotion/core';
import { checkPath, colors, newColors, spacing } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyle = css`
    position: relative;
    display: flex;
    width: 100%;
`;

export const labelStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.2rem ${spacing.xs};
    color: ${newColors.shades.kovBlack};
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    text-decoration: none;
    position: relative;

    &:hover {
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
      text-decoration: underline;
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
    box-shadow: 2px 2px 5px 0px rgba(22, 34, 89, 0.10) inset;
  }

  .checkbox {
    &:checked + .checkbox-label:before {
      background: ${newColors.shades.fullBlue};
      border: 1px solid ${newColors.shades.fullBlue};
    }
  }

  .checkbox:focus-visible + .checkbox-label {
    outline: ${colors.states.focus} solid 2px;
    outline-offset: 2px;
    box-shadow: none;
  }

  .checkbox:checked + .checkbox-label:before {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='${encodeURIComponent('#fff')}' d='${checkPath}'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 48px 48px;
    background-position: 6px 8px;
    position: relative;

    @media (prefers-color-scheme: dark) {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='${encodeURIComponent('#fff')}' d='${checkPath}'/%3E%3C/svg%3E");;
    }
    @media (prefers-color-scheme: light) {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='${encodeURIComponent('#000')}' d='${checkPath}'/%3E%3C/svg%3E");
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
`

export const labelPrimaryStyle = css`
  color: ${newColors.shades.fullBlue};
`
