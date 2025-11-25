import React from 'react';
import { FormDataRequest } from './form-data-request.js';
import { WithContentExpander } from '@konsumentverket-sverige/designsystem.with-content-expander';

import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormDataRequest = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormDataRequest
        title="Ange dina uppgifter"
      >
        <WithContentExpander
          useLightBlueAlternativeStyling={true}
          text="Så behandlar vi dina personuppgifter"
          wrappedComponent={
            <>
              <p>Lorem ipsum dolor sit amet</p>
            </>
          }
        />
      </FormDataRequest>
    </CompositionFonts>
  );
};

