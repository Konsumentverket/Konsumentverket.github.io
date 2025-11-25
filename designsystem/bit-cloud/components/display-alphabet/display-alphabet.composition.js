import React from 'react';

import {DisplayAlphabet} from './display-alphabet.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicDisplayAlphabet = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <DisplayAlphabet
        activeLetter="L"
        visibleLetters={["L", "O", "R", "E", "M"]}
        onClickLetter={(e) => {
          e.preventDefault();
          const dataLetter = e.target.getAttribute('data-letter')
          console.log('Clicked: ' + dataLetter);
        }}
      />
    </CompositionFonts>
  );
}
