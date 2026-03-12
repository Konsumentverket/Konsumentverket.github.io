import { css } from '@emotion/react';
import {
  newColors,
  breakpoints,
} from '@konsumentverket-sverige/designsystem.utils';

const displayAlphabetFont = css`
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 140%;

  @media (prefers-color-scheme: dark) {
    color: ${newColors.shades.fullGrey};
  }
`;

export const alphabetWrapper = css`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${newColors.shades.lightBlue50};

  @media (min-width: ${breakpoints.m}) {
    padding: 24px;
    border-radius: 24px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${newColors.kovDarkModeBlue};
  }
`;

export const letter = css`
  text-align: center;
  display: block;
  padding: 4px;
  border-radius: 2px;
  overflow: hidden;
  ${displayAlphabetFont};
`;

export const validLetter = css`
  position: relative;
  color: ${newColors.shades.fullBlue};

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${newColors.shades.fullBlue};
  }

  &:hover {
    color: ${newColors.shades.kovBlue50};

    &::after {
      border-bottom: 1px solid ${newColors.shades.kovBlue50};
    }
  }

  @media (prefers-color-scheme: dark) {
    color: ${newColors.shades.mediumBlue};

    &:hover {
      color: ${newColors.shades.kovBlue50};
      background-color: ${newColors.shades.mediumBlue50};
    }

    &::after {
      border-bottom: 1px solid ${newColors.shades.mediumBlue};
    }
  }
`;

export const invalidLetter = css`
  color: ${newColors.shades.kovBlack50};
`;

export const activeLetter = css`
  color: ${newColors.shades.kovBlue};
  background-color: ${newColors.shades.mediumBlue50};
  border: 1px solid ${newColors.shades.mediumBlue50};

  &::after {
    height: 2px;
    border-bottom: 1px solid ${newColors.shades.kovBlue};
  }

  &:hover {
    color: ${newColors.shades.kovBlue};
  }

  &:hover::after {
    visibility: visible;
  }

  @media (prefers-color-scheme: dark) {
    color: ${newColors.shades.kovBlue50};
    background-color: ${newColors.shades.mediumBlue50};
    border: 1px solid ${newColors.shades.kovBlue75};
  }
`;
