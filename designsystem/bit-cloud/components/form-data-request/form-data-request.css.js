import { css } from '@emotion/react';
import {
  colors,
  newColors,
  spacing,
  breakpoints,
} from '@konsumentverket-sverige/designsystem.utils';

export const form = css`
  display: flex;
  flex-direction: column;
  background-color: ${newColors.shades.lightBlue50};
  border-radius: 8px;
  padding: 24px;

  button {
    @media (min-width: ${breakpoints.m}) {
      margin-left: auto;
    }
  }
`;

export const reasonTitle = css`
  h2 {
    margin-top: 0;
    margin-bottom: 4px;
  }
`;

export const formTitle = css`
  h3 {
    margin-bottom: 22px;
  }
`;

export const formRow = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 18px;

  @media (min-width: ${breakpoints.m}) {
    flex-direction: row;
    margin-bottom: 40px;
  }

  div {
    position: relative;
    width: 100%;
  }

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 18px;
  }

  input {
    border-radius: 8px;
    border: 1px solid ${newColors.shades.fullBlue};
    height: 57px;
    padding: 0 16px;
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 24px;

    @media (min-width: ${breakpoints.m}) {
      margin-bottom: 0;
    }
  }
`;

export const errorMessage = css`
    align-items: center;
    color: ${newColors.secondaries.fullPink};
    display: flex;
    gap: 6px;
    font-size: 1.4rem;
    line-height: 1.5;
    margin-top: 8px;

    @media (min-width: ${breakpoints.m}) {
      bottom: -30px;
    }

    svg {
      flex-shrink: 0;
    }
`;

export const childrenContainer = css`
  margin-bottom: 24px;
`;

export const recaptchaContainer = css`
  margin-bottom: 24px;
  position: relative;
`;

export const inputError = css`
  border-color: ${newColors.secondaries.fullPink} !important;
`;

export const radio = css`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const radioLabel = css`
  display: inline-flex;
  align-items: flex-start;
  align-self: flex-start;
  padding: 1.2rem ${spacing.xs} 0;
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

  &:before {
    content: '';
    position: relative;
    top: 2px;
    flex-shrink: 0;
    background: #fff;
    border-radius: 2px;
    box-shadow: 2px 2px 5px 0px rgba(22, 34, 89, 0.10) inset;
    box-sizing: border-box;
    border: 1px solid ${newColors.shades.fullBlue};
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 1.6rem;
    border-radius: 50%;

    input:checked + & {
      border: 6px solid ${newColors.shades.fullBlue};
    }
  }
`;
