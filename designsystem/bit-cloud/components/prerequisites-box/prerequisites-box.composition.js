import React from 'react';;

import { PrerequisitesBox } from './prerequisites-box.js';
import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicPrerequisitesBox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <PrerequisitesBox
        text="Är detta rätt sida för dig?"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed <a href="#">do eiusmod tempor incididunt</a> ut labore et dolore magna aliqua.
        </p>
      </PrerequisitesBox>
    </CompositionFonts>
  );
}
