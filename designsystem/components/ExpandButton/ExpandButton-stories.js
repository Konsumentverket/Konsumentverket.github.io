/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { ExpandButton } from './ExpandButton';
import { css } from '@emotion/core';

let name = 'Expanderbar knapp';
storiesOf('Digitala Produkter|Komponenter/Knappar', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' }
    ],
  })
    .add(name, () =>
        {
        const [expanded,setExpanded] = useState(false)
        return <div css={css`max-width: 940px; padding: 50px;`}>
          <ExpandButton 
            text={text("Text", "Expanderbar knapp")}
            secondaryButtonStyle={boolean("Sekundärknapp", false)}
            // invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
            expanded={expanded}
            onClick={()=> setExpanded(!expanded)}
            disabled={boolean("Inaktiverad", false)}
          />
          
          <ExpandButton 
            text={text("Text", "Expanderbar knapp")}
            style={css`margin-top: 1.6rem;`}
            secondaryButtonStyle={true}
            expanded={expanded}
            onClick={()=> setExpanded(!expanded)}
            disabled={boolean("Inaktiverad", false)}
          />

          <ExpandButton 
            text="Expanderbar knapp - small"
            small={true}
            style={css`margin-top: 1.6rem;`}
            secondaryButtonStyle={true}
            expanded={expanded}
            onClick={()=> setExpanded(!expanded)}
            disabled={boolean("Inaktiverad", false)}
          />
          <ExpandButton 
            text="Visa alla"
            small={true}
            style={css`margin-top: 1.6rem;max-width: 150px;`}
            secondaryButtonStyle={true}
            expanded={expanded}
            onClick={()=> setExpanded(!expanded)}
            disabled={boolean("Inaktiverad", false)}
          />

        </div>}
        , { notes: NotesLoader(name) }
    );