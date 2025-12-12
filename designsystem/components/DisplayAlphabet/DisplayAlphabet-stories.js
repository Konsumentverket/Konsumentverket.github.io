/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader'
import { colors } from '../Colors/Colors'
import { DisplayAlphabet } from './DisplayAlphabet'


let name = 'Alfabet';

storiesOf('Digitala Produkter|Komponenter/Alfabet', module).add(name, () => {

  return <div style={{ backgroundColor: colors.theme3.xLight, height: "100vh", padding: "50px" }}>
    <div style={{ maxWidth: "960px" }}>
      <DisplayAlphabet
        activeLetter='C'
      />
    </div>
  </div>
}, { notes: NotesLoader(name) }
);