import React from 'react';;

import { Tag } from './tag.js';
import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicTag = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <Tag
        id="basic-tag-1"
        text="Lorem ipsum"
        url="#"
      />
    </CompositionFonts>
  );
}
