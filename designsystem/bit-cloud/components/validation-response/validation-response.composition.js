import React from 'react';

import { ValidationResponse } from './validation-response.js';

import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicValidationSuccessResponse = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ValidationResponse
        success={true}
        text="Allt gick bra. Tack så mycket!"
      />
    </CompositionFonts>
  );
}

export const BasicValidationErrorResponse = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ValidationResponse
        success={false}
        text="Hoppsan! Det där gick inget vidare. Försök igen."
      />
    </CompositionFonts>
  );
}
