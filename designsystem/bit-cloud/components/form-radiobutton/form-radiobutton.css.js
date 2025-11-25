import { css } from '@emotion/core'
import { colors, newColors } from '@konsumentverket-sverige/designsystem.utils';


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

    &:hover {
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
      text-decoration: underline;
  }
`;

export const labelPrimaryStyle = css`
  color: ${newColors.shades.fullBlue};
`;

export const fieldStyle = css`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .radio + .radio-label:before {
    content: '';
    flex-shrink: 0;
    background: #fff;
    border-radius: 2px;
    box-shadow: 2px 2px 5px 0px rgba(22, 34, 89, 0.10) inset;
    border: 1px solid ${newColors.shades.fullBlue};
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 1.6rem;
    border-radius: 50%;

    forced-color-adjust: none;
    -ms-high-contrast-adjust: none;
  }

  .radio {
    &:checked + label:before {
      background: ${newColors.shades.fullBlue};
      border: 1px solid ${newColors.shades.fullBlue};

      forced-color-adjust: none;
      -ms-high-contrast-adjust: none;
    }
  }

  .radio:focus-visible + .radio-label {
    outline: ${colors.states.focus} solid 2px;
    outline-offset: 2px;
    box-shadow: none;
  }

  .radio:checked + .radio-label:after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: 13px;
    top: auto;
    background: #fff;
  }

  .radio[disabled],
  .radio[disabled] + .radio-label {
    pointer-events: none;
  }

  .radio[disabled] + .radio-label {
    color: ${newColors.shades.fullGrey};
  }

  .radio[disabled] + .radio-label:before {
    border: 1px solid ${newColors.shades.mediumGrey};
    background-color: ${newColors.shades.lightGrey25};
    box-shadow: none;
  }
`
