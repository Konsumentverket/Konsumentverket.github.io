import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';
import { checkPath } from '../Icons/SystemIcons/Check/Check'

export const wrapperStyle = css` 
    position: relative;
    display: inline-block;
`;

export const labelStyle = css` 
    font-size: 2.1rem;
    line-height: 3.2rem;
    border-radius: .8px;
    display: inline-block;
`;

export const checkbox = css`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox-label {
    font-size: 2.1rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
  }

  .checkbox + .checkbox-label:before {
    content: '';
    background: #fff;
    border-radius: 2px;
    border: 1px solid ${colors.theme1.mid};
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    margin-right: 1.6rem;
  }

  .checkbox:checked + .checkbox-label {
    text-decoration: underline;
    color: ${colors.theme1.dark};
    box-shadow:  0px 0px 0px 5px ${colors.theme1.midLight};
    background-color: ${colors.theme1.midLight};
  }

  .checkbox {
    &:checked + label:before {
      background: ${colors.theme1.dark};
      border: 1px solid ${colors.theme1.mid};
    }
  }

  .tabnav & .checkbox:focus + .checkbox-label {
    outline: ${colors.states.focus} solid 2px;
    outline-offset: 2px;
    box-shadow: none;
  }

  .checkbox:hover + .checkbox-label {
    box-shadow:  0px 0px 0px 5px ${colors.theme1.midLight};
    background-color: ${colors.theme1.midLight};
    text-decoration: underline;
  }

  .checkbox:checked + .checkbox-label:before {
    animation: fadein .2s ease-out;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='${encodeURIComponent('#fff')}' d='${checkPath}'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100px 100px;
    background-position: 6px 8px;
    position: relative;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const invertedLabelStyle = css`
    &:hover {
        background-color:${colors.common.white};
    }
`;

export const invertedfieldStyle = css`
    &:hover + label {
        background-color:${colors.common.white};
        color: ${colors.theme1.xDark};
    }
    &:checked + label {
        background-color:${colors.common.white};
    }
    
`;
