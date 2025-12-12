/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { colors } from '../Colors/Colors';
import { ListItemDisabled } from './ListItemDisabled';

let name = 'ListItemDisabled'

storiesOf('Digitala Produkter|Komponenter/Listor', module).add(name, () => {

    return <div style={{height: "100vh",padding:"50px", }}>
        <ListItemDisabled type="Sidtyp"
            reviewedDate={new Date().toISOString()}
            href="#"
            headline="Rubrik"
            bottomText="Källa: google.se" />
        <ListItemDisabled type="Sidtyp"
            href="#"
            headline="Rubrik 2"
            preamble="Man kan ha en ingress här"
            bottomText="Start > Undersida" />
        <ListItemDisabled type="Sidtyp"
            href="#"
            headline="Rubrik 3"
            bottomText="Man kan skicka in valfri text hit" />
    </div>}, { notes: NotesLoader(name) }
  );