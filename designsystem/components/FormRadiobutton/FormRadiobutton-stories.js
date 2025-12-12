/** @jsx jsx */

import React, {useState} from 'react';
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean } from '@storybook/addon-knobs';
import { FormRadiobutton } from './FormRadiobutton';

let name = 'Radioknapp';

storiesOf('Digitala Produkter|Komponenter/Formulärfält', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' },
    ],
  })    
.add(name, () =>
<>
<FormRadiobutton 
name="radiobuttonlist"
id="radio1"
labelText={text("Ledtext", "Svarsalternativ1")}
checked={boolean("Markerad", false)}
invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
value="value1"
/>
<br />
<br />
<FormRadiobutton 
name="radiobuttonlist"
id="radio2"
labelText={"Svarsalternativ2"}
checked={boolean("Markerad", false)}
invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
value="value2"
/>
</>
    , { notes: NotesLoader(name) }
    );