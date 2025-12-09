import React from 'react';

import { FormSuccess } from './form-success.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormSuccess = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormSuccess
        formData={{
          Förnamn: 'Lorem',
          Efternamn: 'Ipsum',
          Personnummer: '123456-7890',
          'E-postadress': 'lorem@ipsum.com',
          Datum: '2024-01-01',
          Fråga:
            'Hej,\n\nJag har en fråga angående en produkt jag köpte nyligen.\n\nJag beställde varan för två veckor sedan, men den har fortfarande inte levererats. Jag har försökt kontakta kundservice, men har inte fått något svar.\n\nKan ni hjälpa mig att:\n\n- Ta reda på var min beställning befinner sig?\n- Ge mig en uppskattad leveranstid?\n- Eventuellt avbryta beställningen om den inte kan levereras snart?\n- Jag har även en annan fråga:\n\nJag funderar på att köpa en annan produkt från er.\n\nTacksam för snabbt svar!\n\nMvh avsändare',
          Filer: [
            {
              'file_1.jpg': '',
            },
            {
              'file 2.pdf': 'Description of file 2',
            },
            {
              'file 3.jpg': 'Description of file 3',
            },
          ],
        }}
        headline="Konsumentverket har tagit emot din begäran om radering av information."
      >
        <p>Vi har tagit emot för din begäran om registerutdrag.</p>
        <p>
          Vi kommer att skicka dig registerutdraget kostnadsfritt inom en månad
          efter att vi har mottagit din begäran.
        </p>
      </FormSuccess>
    </CompositionFonts>
  );
};
