import React from 'react';;

import { FormCheckbox } from './form-checkbox.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormCheckbox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormCheckbox
        id="Lorem-check"
        name="lorem-check"
        value="Lorem ipsum"
        labelText="Lorem ipsum"
        checked={false}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicCheckedFormCheckbox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormCheckbox
        id="Lorem-check-checked"
        name="lorem-check-checked"
        value="Lorem ipsum-checked"
        labelText="Lorem ipsum"
        checked={true}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicDisabledFormCheckbox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormCheckbox
        id="Lorem-check-disabled"
        name="lorem-check-disabled"
        value="Lorem ipsum-disabled"
        labelText="Lorem ipsum"
        disabled={true}
        checked={false}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicPrimaryFormCheckbox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormCheckbox
        id="Lorem-check-primary"
        name="lorem-check-primary"
        value="Lorem ipsum"
        labelText="Lorem ipsum"
        usePrimaryColor={true}
        checked={false}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicPrimaryCheckedFormCheckbox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormCheckbox
        id="Lorem-check-checked-primary"
        name="lorem-check-checked-primary"
        value="Lorem ipsum-checked"
        labelText="Lorem ipsum"
        usePrimaryColor={true}
        checked={true}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}
