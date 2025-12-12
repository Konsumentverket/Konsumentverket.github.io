/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
// import { text, boolean, select } from '@storybook/addon-knobs';

import { Dropdown } from './Dropdown';

let name = 'Dropdown';

storiesOf('Digitala Produkter|Komponenter/Formulärfält', module)   
.add(name, () =>
        <Dropdown label="Label dropdown">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
        </Dropdown> 
    , { notes: NotesLoader(name) }
    );