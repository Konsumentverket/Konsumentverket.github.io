import React from 'react';

import { ListItemSlim } from './list-item-slim.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicListItemSlim = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ListItemSlim
        href="#"
        headline="Bollnäs kommun - Konsumentvägledning Bollnäs"
      />
    </CompositionFonts>
  );
}

export const DisabledListItemSlim = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ListItemSlim
        href="#"
        headline="Bergs kommun"
        preamble="Kommunen saknar konsumentvägledning"
        disabled={true}
      />
    </CompositionFonts>
  );
}
