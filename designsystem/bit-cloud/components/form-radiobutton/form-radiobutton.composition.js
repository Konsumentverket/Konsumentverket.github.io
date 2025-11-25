import React from 'react';;

import { FormRadiobutton } from './form-radiobutton.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormRadiobutton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormRadiobutton
        id="Lorem-radio"
        name="lorem-radio"
        value="Lorem ipsum"
        labelText="Lorem ipsum"
        checked={false}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicCheckedFormRadiobutton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormRadiobutton
        id="Lorem-radio-checked"
        name="lorem-radio-checked"
        value="Lorem ipsum-checked"
        labelText="Lorem ipsum"
        checked={true}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicDisabledFormRadiobutton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormRadiobutton
        id="Lorem-radio-disabled"
        name="lorem-radio-disabled"
        value="Lorem ipsum-disabled"
        labelText="Lorem ipsum"
        checked={false}
        disabled={true}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicPrimaryFormRadiobutton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormRadiobutton
        id="Lorem-radio-primary"
        name="lorem-radio-primary"
        value="Lorem ipsum"
        labelText="Lorem ipsum"
        usePrimaryColor={true}
        checked={false}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicPrimaryCheckedFormRadiobutton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormRadiobutton
        id="Lorem-radio-checked-primary"
        name="lorem-radio-checked-primary"
        value="Lorem ipsum-checked"
        labelText="Lorem ipsum"
        usePrimaryColor={true}
        checked={true}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}
