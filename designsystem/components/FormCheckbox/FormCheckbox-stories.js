/** @jsx jsx */

import React, {useState} from 'react';
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean } from '@storybook/addon-knobs';
import { FormCheckbox } from './FormCheckbox';

let name = 'Kryssruta';

storiesOf('Digitala Produkter|Komponenter/Formulärfält', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' },
    ],
  })    
.add(name, () => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)

  return <div css={{paddingLeft:'2rem', paddingTop:'2rem'}}>
    <FormCheckbox 
        name="checkboxlist"
        id="checkbox1"
        invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
        labelText={text("Ledtext", "Svarsalternativ1")}
        checked={checked1}
        onChange={e => setChecked1(value => !value)}
        value="value1"
    />
    <br/><br/>
    <FormCheckbox 
      name="checkboxlist"
      id="checkbox2"
      labelText={text("Ledtext2", "Svarsalternativ2")}
      checked={checked2}
      onChange={e => setChecked2(value => !value)}
      value="value1"
    />
    </div>
}
    , { notes: NotesLoader(name) }
    );