/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { colors } from '../Colors/Colors';
import { ListItem } from './ListItem';

let name = 'ListItem'

storiesOf('Digitala Produkter|Komponenter/Listor', module).add(name, () => {

    return <div style={{height: "100vh",padding:"50px", }}>
        <ListItem type="Sidtyp"
            reviewedDate={new Date().toISOString()}
            href="#"
            headline="Rubrik"
            bottomText="Källa: google.se" />
        <ListItem type="Sidtyp"
            href="#"
            headline="Rubrik 2"
            preamble="Man kan ha en ingress här"
            bottomText="Start > Undersida" />
        <ListItem type="Sidtyp"
            href="#"
            headline="Rubrik 3"
            bottomText="Man kan skicka in valfri text hit" />
    </div>}, { notes: NotesLoader(name) }
  );