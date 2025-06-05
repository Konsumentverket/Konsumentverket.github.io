import React from 'react';
import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';
import { InputRadio } from './input-radio.js';

export const BasicInputRadio = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <InputRadio
        name="basic-input-radio-lorem-ipsum"
        labelText="Lorem ipsum"
        id="basic-input-radio-lorem-ipsum"
      />
    </CompositionFonts>
  );
}

export const BasicInputRadioGrey = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <InputRadio
        name="basic-input-radio-lorem-ipsum"
        labelText="Lorem ipsum"
        id="basic-input-radio-lorem-ipsum"
        colorTheme="grey"
      />
    </CompositionFonts>
  );
}

export const BasicInputRadioBlue = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <InputRadio
        name="basic-input-radio-lorem-ipsum"
        labelText="Lorem ipsum"
        id="basic-input-radio-lorem-ipsum"
        colorTheme="blue"
      />
    </CompositionFonts>
  );
}

export const BasicInputRadioDisabled = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <InputRadio
        name="basic-input-radio-lorem-ipsum"
        labelText="Lorem ipsum"
        id="basic-input-radio-lorem-ipsum"
        colorTheme="grey"
        disabled={true}
      />
    </CompositionFonts>
  );
}
