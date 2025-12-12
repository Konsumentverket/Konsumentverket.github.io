import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { Tag } from './Tag';

let name = 'Tag';
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <Tag id="TestTag1" text="Test tag with long text" />
        , { notes: NotesLoader(name) }
    );