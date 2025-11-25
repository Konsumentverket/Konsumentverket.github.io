import React from 'react';;

import { ExpandButton } from './expand-button.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicExpandButton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ExpandButton
        text="Visa alla områden"
        expanded={false}
      />
    </CompositionFonts>
  );
}

export const BasicExpandedExpandButton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ExpandButton
        text="Visa alla områden"
        expanded={true}
      />
    </CompositionFonts>
  );
}

export const BasicDisabledExpandButton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ExpandButton
        text="Visa alla områden"
        expanded={false}
        disabled={true}
      />
    </CompositionFonts>
  );
}
