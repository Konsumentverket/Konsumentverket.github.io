
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as css from './DisplayAlphabet.css.js'

const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', 'Å', 'Ä', 'Ö'
]

const isVisibleLetter = (visibleLetters, letter) =>
  (visibleLetters && Array.isArray(visibleLetters)) && visibleLetters.some(v => v === letter)

export const DisplayAlphabet = ({
  onClickLetter,
  onClickShowAll,
  activeLetter,
  visibleLetters,
  displayShowAllLink = true
}) => <>
    <div css={css.alphabetWrapper}>
      {alphabet.map(letter => isVisibleLetter(visibleLetters, letter) ?
        <a
          key={letter}
          css={[
            css.letter,
            letter === activeLetter ? css.activeLetter : null
          ]}
          href={visibleLetters.some(v => v === letter) ? `?letter=${letter}` : `/`}
          data-letter={letter}
          onClick={onClickLetter}
        >{letter}</a>
        :
        <span key={letter} css={[css.letter,css.invalidLetter]}>{letter}</span>)}
    </div>
    {displayShowAllLink && <div css={css.linkShowAllWrapper}>
      <a css={css.linkShowAll}
        href={`?letter=alla`}
        onClick={onClickShowAll}
      >Visa Alla A-Ö</a>
    </div>}
  </>
