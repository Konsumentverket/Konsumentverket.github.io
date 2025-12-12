import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, select, boolean } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { iconDefinitions } from '../Icon/Icon';

let name = 'Knapp';
storiesOf('Digitala Produkter|Komponenter/Knappar', module)
.addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'blueExtraDark', value: '#162259' },
    { name: 'blueMid', value: '#006EC2' },
  ],
})
.add(name, () =>

  <Button
        text={text("Text", "Gå till konsumentverket.se")}
        iconLeft={select("Ikon vänster", ["", ...Object.keys(iconDefinitions)], "")}
        iconRight={select("Ikon höger", ["", ...Object.keys(iconDefinitions)], "")}
        secondaryButtonStyle={boolean("Sekundärknapp", false)}
        invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
        selected={boolean("Förvald", false)}
        disabled={boolean("Inaktiverad", false)}
      />

      , { notes: NotesLoader(name) }
);
 
