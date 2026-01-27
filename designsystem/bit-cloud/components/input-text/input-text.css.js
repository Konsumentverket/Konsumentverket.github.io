import { css } from '@emotion/react';
import {
  colors,
  newColors,
  breakpoints,
} from '@konsumentverket-sverige/designsystem.utils';

export const InputStyle = (hasInnerContent) => css`
  border-radius: 8px;
  border: 1px solid ${newColors.shades.fullBlue};
  height: 57px;
  padding: 0 16px;
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 24px;
  box-shadow: 2px 2px 5px 0px rgba(22, 34, 89, 0.1) inset;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 0;
  }

  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-webkit-search-cancel-button {
    appearance: none;
  }
`;

export const LockedStyle = css`
  position: absolute;
  top: 4px;
  right: 4px;

  height: calc(100% - 8px);   /* ← lika hög som input */
  display: flex;
  align-items: center;

  padding: 0 24px;
  background: ${newColors.shades.lightGrey50};
  border-radius: 4px;

  pointer-events: none;
`;
export const LockedStyleWrapper = css`
    position: relative;
`;


export const invalidStyle = css`
  input {
    border-color: #b50156;
  }
`;
export const InputWrapperStyle = css`
  position: relative;
`;

export const ClearInput = css`
  appearance: none;
  position: absolute;
  right: 1.6rem;
  border: 0px;
  background-color: transparent;
  bottom: 1.4rem;
  width: 2.8rem;
  height: 2.8rem;
  padding: 0;
  svg {
    fill: ${colors.theme1.mid};
    width: 2.8rem;
    height: 2.8rem;
  }
  &:focus {
    outline: none;
  }
`;
export const LoadingStyle = css`
  position: absolute;
  right: 2.4rem;
  bottom: 2.2rem;
`;
export const Label = css`
  display: block;
  font-weight: 700;
  margin-bottom: 18px;
`;
