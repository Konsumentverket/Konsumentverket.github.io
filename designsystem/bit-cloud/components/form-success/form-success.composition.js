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
          Fråga: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi aperiam aspernatur cum deserunt dolor ducimus esse et eum expedita fuga illo impedit itaque iusto laborum laudantium quae quas quia, quidem r epellat saepe sequi similique suscipit temporibus ullam vel! A ab architecto aut cupiditate distinctio dolor doloribus ducimus eligendi est expedita explicabo illum in inventore ipsa ipsam ipsum iure, laboriosam libero maxime molestias necessitatibus odio optio perspiciatis porro, quaerat quam quisquam quos ratione repellat suscipit tempore ullam voluptatibus voluptatum. Eos excepturi hic molestiae molestias optio reiciendis tenetur? Assumenda at, beatae distinctio modi nemo omnis quae quo ullam vero voluptatibus.',
          Filer: [
            {
              "file_1.jpg": "",
            },
            {
              "file 2.pdf": "Description of file 2",
            },
            {
              "file 3.jpg": "Description of file 3"
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
