/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import * as styles from './display-alphabet.css.js';

const allLetters = 'alla';

const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', 'Å', 'Ä', 'Ö'
];

const isVisibleLetter = (visibleLetters, letter) =>
  (visibleLetters && Array.isArray(visibleLetters)) && visibleLetters.some(v => v === letter);

export const DisplayAlphabet = ({
  onClickLetter = () => {},
  activeLetter = '',
  visibleLetters = [],
}) => {
  return (
    <div css={styles.alphabetWrapper} data-comp="display-alphabet">
      {alphabet.map(letter => isVisibleLetter(visibleLetters, letter) ? (
        <a
          key={letter}
          css={[
            styles.letter,
            styles.validLetter,
            letter === activeLetter ? styles.activeLetter : null
          ]}
          href={visibleLetters.some(v => v === letter) ? `?letter=${letter}` : `/`}
          data-letter={letter}
          onClick={onClickLetter}
          className={'noStyle'}
        >
          {letter}
        </a>
      ) : (
        <span key={letter} css={[styles.letter, styles.invalidLetter]}>
          {letter}
        </span>
      ))}
    </div>
  );
};
