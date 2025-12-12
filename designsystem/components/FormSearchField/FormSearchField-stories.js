/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean, select } from '@storybook/addon-knobs';
import { FormSearchField } from './FormSearchField';
import { colors } from '../Colors/Colors';
import { iconDefinitions } from '../Icon/Icon';

let name = 'Sökfält';

storiesOf('Digitala Produkter|Komponenter/Formulärfält', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' },
    ],
  })    
.add(name, () => {
  const [input, setinput] = useState('')
  return <div>
    <FormSearchField 
        fieldtext={text("Hjälptext", "Vad letar du efter?")}
        buttontext={text("Knapptext", "Sök")}
        icon={select("Ikon", ["", ...Object.keys(iconDefinitions)], "Search")}
        onChange={e => setinput(e.target.value)}
        onClear={() => setinput('')}
        value={input}
        invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
        disabled={boolean("Inaktiverad", false)}
        />
    </div>
}
    , { notes: NotesLoader(name) }
    );