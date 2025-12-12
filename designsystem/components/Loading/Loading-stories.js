/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import Loading from './Loading';
import { colors } from '../Colors/Colors';

let name = 'Laddning';


storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>  {
        return <div>
                <div>Standard:<Loading /></div>
                <div>Standard custom color:<Loading color={colors.states.focus} /></div>
                <div>Standard:<Loading width="10px" height="10px" /></div>
                
            </div>
    }
        
    , { notes: NotesLoader(name) }
    );