import { css } from '@emotion/react';
import { colors, newColors, spacing } from '@konsumentverket-sverige/designsystem.utils';
import { checkPath } from '@konsumentverket-sverige/designsystem.icons-system';

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
    border-radius: 4px;
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
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='${encodeURIComponent('#0061C2')}' d='M19.4303 0.786961C18.6603 0.665961 18.0678 1.12996 17.7523 1.57046C15.154 5.19727 12.563 8.82928 9.9793 12.4665L9.7978 12.7215C9.32464 12.2064 8.85014 11.6926 8.3743 11.18C6.93497 9.62573 5.4799 8.08615 4.0093 6.56146C3.4553 5.98896 2.5098 5.66646 1.6608 6.16646C1.23681 6.41473 0.851398 6.72367 0.516801 7.08346C-0.211699 7.87146 -0.00669867 8.96346 0.524301 9.62446C2.79768 12.4439 5.25291 15.1118 7.8743 17.611C9.1778 18.851 11.2108 18.706 12.3278 17.2985C13.9748 15.2235 16.9778 11.2715 21.6328 4.55746C22.0548 3.94746 22.2348 3.01896 21.6978 2.26146C20.9778 1.24546 20.0843 0.889961 19.4303 0.786961Z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 48px 48px;
    background-position: 6px 8px;
    position: relative;
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

export const statsStyle = css`
  margin-left: auto;
`;
