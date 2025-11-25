import { css } from '@emotion/core';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

import React from 'react';
import { FocusCard } from './focus-card';

// Basic Example
export const FocusCardExample = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FocusCard
        title={"Lorem ipsum dolor sit amet"}
        text={"Pellentesque elit enim, congue eget tellus non. Sollicitudin tristique urna aliquam bibendum dapibus mi"}
        url={'/#budgetkalkylen'}
      />
    </CompositionFonts>
  );
}

// Dark Example
export const FocusCardDarkExample = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FocusCard
        title={"Maecenas est quam aliquam vel tincidunt vel iaculis a metus"}
        text={"Praesent elementum a massa ac elementum. Donec ipsum orci a porta odio tempor vel"}
        url={'/#budgetkalkylen'}
        dark={true}
      />
    </CompositionFonts>
  );
}
