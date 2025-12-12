import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { Skeleton } from './Skeleton';
import { number } from '@storybook/addon-knobs';

let name = 'Skeleton';
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <Skeleton rows={number('Antal rader', 4)} height={number('Höjd', '48')} />
        , { notes: NotesLoader(name) }
    );